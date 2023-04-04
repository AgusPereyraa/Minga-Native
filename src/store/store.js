import { configureStore } from "@reduxjs/toolkit";
import textReducer from './Search/reducer';
import mangasReducer from './Mangas/reducer';
import checkReducer from './Cheks/reducer';
import alertReducer from './Alert/reducer';
import mangaReducer from './Manga/reducer';
import chapterReducer from './Chapters/reducer';
import editReducer from './MangaEdit/reducer';
import getMyMangas from './MyMangas/reducer';
import modalDeleteReducer from './MangaDelete/reducer';
import authorReducer from './Auths/reducer'; //G
import donationReducer from './Donations/reducer';
import authorReducer2 from './Authors/reducer';
import authorReducerG from './Author/reducer';
import companyReducer from './Company/reducer';
import captureState from './Capture/reducer';

export const store = configureStore({
        reducer: {
        text: textReducer,
        mangas: mangasReducer, //G
        checks: checkReducer,
        alert: alertReducer,
        manga: mangaReducer,
        chapters: chapterReducer,
        edit: editReducer,
        myMangas: getMyMangas,
        modalDeleteState: modalDeleteReducer,
        author: authorReducer, //G
        autor: authorReducer2,
        donations: donationReducer,
        Author: authorReducerG,
        Company: companyReducer,
        checked: captureState,
},
});
