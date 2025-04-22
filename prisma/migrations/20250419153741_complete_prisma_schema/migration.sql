-- CreateEnum
CREATE TYPE "ServiceStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'DONE');

-- CreateTable
CREATE TABLE "customers" (
    "customerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "bikes" (
    "bikeId" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "customerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bikes_pkey" PRIMARY KEY ("bikeId")
);

-- CreateTable
CREATE TABLE "services" (
    "serviceId" TEXT NOT NULL,
    "bikeId" TEXT NOT NULL,
    "serviceDate" TIMESTAMP(3) NOT NULL,
    "completionDate" TIMESTAMP(3),
    "description" TEXT NOT NULL DEFAULT '',
    "status" "ServiceStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "services_pkey" PRIMARY KEY ("serviceId")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- AddForeignKey
ALTER TABLE "bikes" ADD CONSTRAINT "bikes_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "bikes"("bikeId") ON DELETE CASCADE ON UPDATE CASCADE;
