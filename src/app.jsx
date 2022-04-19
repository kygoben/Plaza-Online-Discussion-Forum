import React from 'react';
import { MessageDisplay } from './components/message-display';
import { Header } from './components/header';
import { Reply } from './components/reply';
import { Panel } from './components/panel';
import { useSelector, useDispatch } from 'react-redux';
import { createPost } from './posts-slice';

export const App = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    return (
        <Header>
            <Panel>
                {posts.map(
                    (message, index) =>
                        <MessageDisplay
                            message={message}
                        />
                )}
                Create new message
                <Reply onSubmit={ (post) => dispatch(createPost(post)) }/>
            </Panel>
        </Header>
    );
}

// globalThis.crypto.randomUUID
