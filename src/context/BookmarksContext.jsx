import { createContext, useEffect, useState } from "react";

export const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
    const [bookmarks, setBookmarks] = useState([]);


    useEffect(() => {
        const localBookmarks = localStorage.getItem('bookmarks');
        if (localBookmarks) {
            setBookmarks(JSON.parse(localBookmarks));
        }
    }, []);

    const handleBookmark = (item) => {
        setBookmarks((prevBookmarks) => {
            const bookmarkExists = prevBookmarks.some(
                (bookmark) => bookmark.id === item.id
            );

            let updateBookmarks;
            if (bookmarkExists) {
                updateBookmarks = prevBookmarks.filter(
                    (bookmark) => bookmark.id!== item.id
                );
            }else{
                updateBookmarks = [...prevBookmarks, item];
            }

            localStorage.setItem('bookmarks', JSON.stringify(updateBookmarks));
            return updateBookmarks;
        });
    };
    return (
        <BookmarksContext.Provider value={{ bookmarks, handleBookmark }}>
            {children}
        </BookmarksContext.Provider>
    );
}