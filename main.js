const linksSocialMedia = {
  github: "MarcosKresch",
  youtube: "channel/UC7g6M-Btvd7swZ9sC9-zXaA",
  facebook: "marcos.welinton.5",
  instagram: "marcos_kresch",
  twitter: "marcos_kresch"
}

function changeLinksSocialMedias() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
  }
}

changeLinksSocialMedias()

function getGitHubProfilesInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      profilePicture.src = data.avatar_url
      userLogin.textContent = data.login
    })
  
}

getGitHubProfilesInfos()