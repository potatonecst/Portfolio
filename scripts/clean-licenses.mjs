// clean-licenses.mjs
import fs from 'fs';

const inputPath = './public/licenses.json';

try {
    const rawData = fs.readFileSync(inputPath, 'utf8');
    const licenses = JSON.parse(rawData);
    const cleaned = {};

    console.log("⏳ ライセンス全文を読み取り中...");

    Object.keys(licenses).forEach((key) => {
        // 自分のプロジェクト名(portfolio)や型定義(@types)はスキップ
        if (key.startsWith('portfolio@') || key.includes('@types/')) return;

        const detail = licenses[key];
        let licenseText = "Full license text is available in the repository.";

        // licenseFile が存在すれば、その中身を読みに行く
        if (detail.licenseFile && fs.existsSync(detail.licenseFile)) {
            try {
                licenseText = fs.readFileSync(detail.licenseFile, 'utf8');
            } catch (e) {
                console.warn(`⚠️ Failed to read: ${detail.licenseFile}`);
            }
        }

        // 必要なデータだけを保持（path や licenseFile はここで捨てる）
        cleaned[key] = {
            licenses: detail.licenses,
            repository: detail.repository,
            publisher: detail.publisher,
            licenseText: licenseText
        };
    });

    fs.writeFileSync(inputPath, JSON.stringify(cleaned, null, 2));
    console.log("✅ Success: 全文の取得とパス情報の削除が完了しました！");
} catch (error) {
    console.error("❌ Error:", error.message);
}