import React from 'react';
import { MessageDisplay } from './components/message-display';
import { Header } from './components/header';
import { Panel } from './components/panel';
import { useSelector } from 'react-redux';
import { NewPostDisplay } from './components/new-post/new-post';

export const App = () => {
    const posts = useSelector(state => state.posts);
    const newPostDisplay = useSelector(state => state.newPostDisplay);

    return (
        <Header>
            <Panel content = {posts}>
                {
                    !newPostDisplay ?
                    posts.map(
                        (message) =>
                            <MessageDisplay
                                message={message}
                            />
                    ) :
                    <NewPostDisplay/>
                }
            </Panel>
        </Header>
    );
}

// globalThis.crypto.randomUUID
