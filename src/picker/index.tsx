import React, { useEffect, useMemo, useState, useRef } from 'react';
import classnames from 'classnames';

import Loading from '../loading';
import PickerColumn from './PickerColumn';

// import useRefs from '../hooks/use-refs'
import useEventListener from '../hooks/use-event-listener';

import { PickerProps } from './PropsType';
import { createNamespace, unitToPx, preventDefault } from '../utils';
import { BORDER_UNSET_TOP_BOTTOM } from '../utils/constant';

const [bem] = createNamespace('picker');

const Picker: React.FC<PickerProps> = (props) => {
  // const [refs, setRefs] = useRefs();
  const [formattedColumns, setFormattedColumns] = useState([]);

  const wrapper = useRef(null);

  const itemHeight = useMemo(() => unitToPx(props.itemHeight), [props.itemHeight]);

  const dataType = useMemo(() => {
    const { columns } = props;
    const firstColumn = columns[0] || {};

    if (firstColumn.children) {
      return 'cascade';
    }
    if (firstColumn.values) {
      return 'object';
    }
    return 'text';
  }, [props.columns]);

  // const onChange = (columnIndex) => {
  //   if (dataType.value === 'cascade') {
  //     onCascadeChange(columnIndex);
  //   }

  //   if (dataType.value === 'text') {
  //     emit('change', getColumnValue(0), getColumnIndex(0));
  //   } else {
  //     emit('change', getValues(), columnIndex);
  //   }
  // };
  const format = () => {
    const { columns } = props;

    if (dataType === 'text') {
      setFormattedColumns([
        {
          values: columns,
        },
      ]);
    } else if (dataType === 'cascade') {
      // formatCascade();
    } else {
      setFormattedColumns(columns);
    }
  };

  useEffect(() => {
    format();
  }, [props.columns]);

  useEventListener('touchmove', preventDefault, {
    target: wrapper.current,
    depends: [wrapper.current],
  });

  // get column instance by index
  const getColumn = (index: number) => props.children[index];

  // get column value by index
  // const getColumnValue = (index) => {
  //   const column = getColumn(index);
  //   return column && column.getValue();
  // };

  const onChange = (columnIndex) => {
    if (dataType === 'cascade') {
      // onCascadeChange(columnIndex);
    }

    if (dataType === 'text') {
      // emit('change', getColumnValue(0), getColumnIndex(0));
    } else {
      // emit('change', getValues(), columnIndex);
    }
  };

  const renderColumnItems = () =>
    formattedColumns.map((item, columnIndex) => (
      <PickerColumn
        key={item}
        // ref={setRefs(columnIndex)}
        // v-slots={{ option: slots.option }}
        textKey={props.valueKey}
        readonly={props.readonly}
        className={item.className}
        itemHeight={itemHeight}
        defaultIndex={item.defaultIndex ?? +props.defaultIndex}
        swipeDuration={props.swipeDuration}
        visibleItemCount={props.visibleItemCount}
        initialOptions={item.values}
        onChange={() => {
          onChange(columnIndex);
        }}
      />
    ));

  const renderColumns = () => {
    const wrapHeight = itemHeight * props.visibleItemCount;
    const frameStyle = { height: `${itemHeight}px` };
    const columnsStyle = { height: `${wrapHeight}px` };
    const maskStyle = {
      backgroundSize: `100% ${(wrapHeight - itemHeight) / 2}px`,
    };

    return (
      <div ref={wrapper} className={classnames(bem('columns'))} style={columnsStyle}>
        {renderColumnItems()}
        <div className={classnames(bem('mask'))} style={maskStyle} />
        <div className={classnames(BORDER_UNSET_TOP_BOTTOM, bem('frame'))} style={frameStyle} />
      </div>
    );
  };

  return (
    <div className={classnames(bem())}>
      {props.loading ? <Loading className={classnames(bem('loading'))} /> : null}
      {renderColumns()}
    </div>
  );
};

Picker.defaultProps = {
  itemHeight: 44,
  visibleItemCount: 6,
  swipeDuration: 1000,
  defaultIndex: 0,
};

export default Picker;
