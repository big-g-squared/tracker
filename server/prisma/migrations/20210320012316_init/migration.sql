-- CreateTable
CREATE TABLE "Class" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lecture" TEXT NOT NULL,
    "discussion" TEXT,
    "lab" TEXT,
    "officeHours" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Module" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "classId" INTEGER NOT NULL,
    "weekOf" TEXT NOT NULL,
    FOREIGN KEY ("classId") REFERENCES "Class" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "moduleId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    FOREIGN KEY ("moduleId") REFERENCES "Module" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Class.name_unique" ON "Class"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Module.classId_unique" ON "Module"("classId");

-- CreateIndex
CREATE UNIQUE INDEX "Unit.moduleId_unique" ON "Unit"("moduleId");
