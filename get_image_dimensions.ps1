$url = "https://cdn.discordapp.com/attachments/1429607556384297003/1438184818738200616/credit-idrnz-83.jpg?ex=6915f57c&is=6914a3fc&hm=55fb1358e2e58af90666d4e7523c53cefe63fefc3228024ea4e29a2aba33502c&"
$tempFile = [System.IO.Path]::GetTempFileName() + ".jpg"

try {
    Invoke-WebRequest -Uri $url -OutFile $tempFile
    Add-Type -AssemblyName System.Drawing
    $img = [System.Drawing.Image]::FromFile($tempFile)
    Write-Output ("Dimensions: " + $img.Width + " x " + $img.Height + " px")
    $img.Dispose()
} finally {
    if (Test-Path $tempFile) {
        Remove-Item $tempFile
    }
}

