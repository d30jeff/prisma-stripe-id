-- CreateIndex
CREATE INDEX "Cat_ID_ownerID_idx" ON "Cat"("ID", "ownerID");

-- CreateIndex
CREATE INDEX "Owner_ID_idx" ON "Owner"("ID");
