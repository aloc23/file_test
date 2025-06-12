
function loadFiles() {
  const folder = document.getElementById("folderSelect").value;
  const fileList = document.getElementById("fileList");
  const viewer = document.getElementById("viewer");
  fileList.innerHTML = "";
  viewer.innerHTML = "";

  const fileMap = {
    "renders": ["example1.png", "example2.jpg"],
    "videos": ["sample.mp4"],
    "drawings": ["layout.pdf"],
    "quotes": ["quote.pdf"],
    "folios": ["folio.pdf"],
    "draft contracts": ["contract.pdf"]
  };

  if (!fileMap[folder]) return;

  fileMap[folder].forEach(file => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = file;
    a.href = "#";
    a.onclick = () => viewFile(folder, file);
    li.appendChild(a);
    fileList.appendChild(li);
  });
}

function viewFile(folder, file) {
  const viewer = document.getElementById("viewer");
  const path = `files/${folder}/${file}`;
  const ext = file.split('.').pop().toLowerCase();
  if (["png", "jpg", "jpeg", "gif"].includes(ext)) {
    viewer.innerHTML = `<img src="${path}" alt="${file}">`;
  } else if (["mp4", "mov"].includes(ext)) {
    viewer.innerHTML = `<video controls><source src="${path}" type="video/${ext}">Your browser does not support the video tag.</video>`;
  } else if (["pdf"].includes(ext)) {
    viewer.innerHTML = `<iframe src="${path}" frameborder="0"></iframe>`;
  } else {
    viewer.innerHTML = `<p>Cannot preview this file type. <a href="${path}" target="_blank">Download</a></p>`;
  }
}
