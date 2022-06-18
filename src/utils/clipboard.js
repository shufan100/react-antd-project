import Clipboard from 'clipboard';
import { Message } from 'antd';

function clipboardSuccess() {
  Message.success('复制成功');
}

function clipboardError() {
  Message.error('复制失败');
}

export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  });
  clipboard.on('success', () => {
    clipboardSuccess();
    clipboard.destroy();
  });
  clipboard.on('error', () => {
    clipboardError();
    clipboard.destroy();
  });
  clipboard.onClick(event);
}
