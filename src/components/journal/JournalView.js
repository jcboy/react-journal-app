import React from 'react';
import { Sidebar } from './Sidebar';
import { NoteView } from '../notes/NoteView';
import {NothingSelected} from "./NothingSelected";

export const JournalView = () => {
    return (
        <div className="journal__main-content">

            <Sidebar />

            <main>
                <NoteView />
                {/* <NothingSelected />  */}
            </main>

        </div>
    )
}