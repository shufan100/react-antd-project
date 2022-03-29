// 全屏 5版本，不可以过高
import { useState, useEffect } from 'react';
import screenfull from 'screenfull';
import { message } from 'antd';
import Icons from '@/components/Icons'; // 动态icon

const clicks = () => {
  if (!screenfull.isEnabled) {
    message.warning('you browser can not work');
    return false;
  }
  screenfull.toggle();
};

const FullScreen = () => {
  const [bool, setBool] = useState(false);

  const change = () => {
    setBool(screenfull.isFullscreen);
  };
  useEffect(() => {
    screenfull.isEnabled && screenfull.on('change', change);
    return () => {
      screenfull.isEnabled && screenfull.off('change', change);
    };
  }, []);

  const title = !bool ? '全屏' : '取消全屏';
  const type = !bool ? 'FullscreenOutlined' : 'FullscreenExitOutlined';
  return (
    <>
      <Icons iconName={type} size={24} toolTitle={title} click={clicks} />
    </>
  );
};
export default FullScreen;