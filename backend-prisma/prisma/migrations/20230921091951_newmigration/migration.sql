-- CreateTable
CREATE TABLE "verbs" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "verbID" INTEGER NOT NULL,
    "verbGroup" TEXT NOT NULL,
    "primaryVerb" TEXT NOT NULL,
    "specialVerb" TEXT,
    "auxiliaryVerb" TEXT,
    "initialVerb" TEXT,

    CONSTRAINT "verbs_pkey" PRIMARY KEY ("id")
);
