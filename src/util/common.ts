function convertDriveLinkToDirectImage(link: string) {
  // This handles different Drive URL formats
  const fileIdMatch = link.match(/(?:\/d\/|id=)([a-zA-Z0-9_-]{25,})/);
  if (fileIdMatch && fileIdMatch[1]) {
    const fileId = fileIdMatch[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  } else {
    console.error("Invalid Google Drive link.");
    return null;
  }
}

export { convertDriveLinkToDirectImage };
