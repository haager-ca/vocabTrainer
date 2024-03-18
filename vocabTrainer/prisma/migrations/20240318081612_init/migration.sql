-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER
);

-- CreateTable
CREATE TABLE "Voc" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vocabulary" TEXT NOT NULL,
    "translation" TEXT NOT NULL,
    "language" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Voc_vocabulary_key" ON "Voc"("vocabulary");
