param(
  [Parameter(Mandatory = $true)][string]$SourceDirectory
)

# Re-encode supplied artwork only: no regenerated logos, lettering or QR codes.
# Card/Kit remove empty white space, keeping every physical piece and its shadow.
Add-Type -AssemblyName System.Drawing
$outputDirectory = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../src/assets/products'))
$photos = @(
  @{ Name = 'google_review_nfc_cards_duo'; Top = 250; Height = 950 },
  @{ Name = 'white_nfc_review_stand_display'; Top = 0; Height = 1402 },
  @{ Name = 'ab_reviews_google_feedback_kit'; Top = 250; Height = 1000 }
)
$jpegCodec = [Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'

foreach ($photo in $photos) {
  $inputPath = Join-Path $SourceDirectory ($photo.Name + '.png')
  $sourceImage = [Drawing.Image]::FromFile($inputPath)
  try {
    if ($sourceImage.Width -ne 1122 -or $sourceImage.Height -ne 1402) {
      throw "Unexpected source dimensions: $inputPath. Review framing before generating."
    }
    foreach ($width in @(480, 800)) {
      $height = [int][Math]::Round($photo.Height * $width / $sourceImage.Width)
      $bitmap = [Drawing.Bitmap]::new($width, $height)
      $graphics = [Drawing.Graphics]::FromImage($bitmap)
      $parameters = [Drawing.Imaging.EncoderParameters]::new(1)
      try {
        $graphics.Clear([Drawing.Color]::White)
        $graphics.InterpolationMode = [Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.PixelOffsetMode = [Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.DrawImage($sourceImage, [Drawing.Rectangle]::new(0, 0, $width, $height), 0, $photo.Top, $sourceImage.Width, $photo.Height, [Drawing.GraphicsUnit]::Pixel)
        $parameters.Param[0] = [Drawing.Imaging.EncoderParameter]::new([Drawing.Imaging.Encoder]::Quality, [long]88)
        $destination = Join-Path $outputDirectory ($photo.Name + '-' + $width + '.jpg')
        $bitmap.Save($destination, $jpegCodec, $parameters)
        Get-Item -LiteralPath $destination | Select-Object Name, Length
      } finally {
        $parameters.Dispose()
        $graphics.Dispose()
        $bitmap.Dispose()
      }
    }
  } finally {
    $sourceImage.Dispose()
  }
}
