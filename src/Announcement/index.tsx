/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';
import classnames from 'classnames';
import NoticeBar from '../notice-bar';
import Overlay from '../overlay';
import { AnnouncementProps } from './PropsType';
import { createNamespace, isFunction } from '../utils';

const [bem] = createNamespace('announcement');
const Announcement: React.FC<AnnouncementProps> = (props) => {
  const { adList = [], mode = '', className, color, background, leftIcon, onClick } = props;
  const [noticeDialogShow, setNoticeDialogShow] = useState(false);
  const handleNoticeClick = () => {
    setNoticeDialogShow(true);
    isFunction(onClick) && onClick?.();
  };

  if (adList?.length === 0) {
    return null;
  }

  return (
    <>
      <NoticeBar
        className={classnames(bem(), className)}
        mode={mode}
        text={adList?.[0].mainTitle}
        color={color || '#cb9139'}
        background={background || 'rgba(255, 246, 208, 0.5)'}
        leftIcon={leftIcon || ''}
        onClick={handleNoticeClick}
      />

      <Overlay show={noticeDialogShow} onClick={() => setNoticeDialogShow(false)}>
        <div className={classnames(bem('dialog'))}>
          <div className={classnames(bem('title'))}>{adList?.[0]?.mainTitle}</div>
          <div className={classnames(bem('content'), adList?.[0]?.linkUrl ? bem('linkUrl') : '')}>
            {adList?.[0]?.linkUrl ? (
              <iframe className={classnames(bem('iframe'))} title=" " src={adList?.[0]?.linkUrl} />
            ) : (
              <div
                className={classnames(bem('text'))}
                dangerouslySetInnerHTML={{ __html: adList?.[0]?.adDescription }}
              />
            )}
          </div>
        </div>
      </Overlay>
    </>
  );
};

export default Announcement;
