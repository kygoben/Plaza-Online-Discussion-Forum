import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import classNames from 'classnames';

import styles from './editor.module.css';

export const Editor = ({
    text,
    setText
}) => {

    return (
        <div className={classNames(styles.editor)}>
            <CKEditor
                editor={ ClassicEditor }
                data={text}
                onChange={ (event, editor) => {
                    const data = editor.getData();
                    setText(data);
                } }
            />
        </div>
    );
};
