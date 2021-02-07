import * as monaco from 'monaco-editor';
import JSONWorker from './worker/json?worker&inline';
import EditorWorker from './worker/editor?worker&inline';

const MonacoEnvironment = {
  getWorker(workerId, label) {
    if (label === 'json') {
      return new JSONWorker();
    }

    return new EditorWorker();
  },
};

window.MonacoEnvironment = MonacoEnvironment;

const root = document.getElementById('app');

monaco.editor.create(root, {
  model: monaco.editor.createModel('', 'json'),
});
