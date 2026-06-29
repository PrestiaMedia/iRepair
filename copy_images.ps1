$sourceDir = "C:\Users\davin\.gemini\antigravity\brain\6d51c8d6-2773-44b7-b788-eef0b50ce2a4"
$targetDir = "C:\Users\davin\Desktop\BM\iRepair\public\images"

Get-ChildItem -Path "$sourceDir\*_repair_*.png" | ForEach-Object {
    $newName = $_.Name -replace '_\d{13}\.png', '.png'
    Copy-Item $_.FullName -Destination (Join-Path $targetDir $newName) -Force
}
