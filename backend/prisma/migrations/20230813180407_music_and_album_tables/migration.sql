-- CreateTable
CREATE TABLE "album" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "date_release" DATETIME NOT NULL,
    "genre" TEXT NOT NULL,
    "is_favorite" BOOLEAN NOT NULL,
    "id_artist" INTEGER NOT NULL,
    CONSTRAINT "album_id_artist_fkey" FOREIGN KEY ("id_artist") REFERENCES "artist" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Music" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "is_favorite" BOOLEAN NOT NULL,
    "id_album" INTEGER NOT NULL,
    CONSTRAINT "Music_id_album_fkey" FOREIGN KEY ("id_album") REFERENCES "album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
