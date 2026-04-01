export const initDatLichHenTable = async () => {
    try {
        const query = `
        IF NOT EXISTS (
            SELECT * FROM sys.objects 
            WHERE object_id = OBJECT_ID(N'DATLICHHEN') 
            AND type = 'U'
        )
        BEGIN
            CREATE TABLE DATLICHHEN (
                ID INT IDENTITY(1,1) PRIMARY KEY,
                CCCD VARCHAR(20) NOT NULL,
                NGAYLAYPHIEU DATETIME NOT NULL DEFAULT GETDATE(),
                MANGAYLAYPHIEU VARCHAR(20) NOT NULL,
                MAPHIEU INT NOT NULL
            );
        END
        `;

        await executeQuery(query);
        console.log('✅ DATLICHHEN table ready');
    } catch (err) {
        console.error('❌ Error creating DATLICHHEN:', err);
    }
};