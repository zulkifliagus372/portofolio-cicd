const fs = require('fs');
const path = require('path');

test('Memastikan file index.html ada dan judul portofolio sudah benar', () => {
    // 1. Cek apakah file index.html benar-benar ada di folder proyek
    const htmlPath = path.resolve(__dirname, 'index.html');
    const htmlExists = fs.existsSync(htmlPath);
    expect(htmlExists).toBe(true);

    // 2. Baca isi file dan pastikan nama kamu "zulkifli agus" ada di dalam kode
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    expect(htmlContent).toContain('zulkifli agus');
});