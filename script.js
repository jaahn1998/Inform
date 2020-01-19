function onSignIn(googleUser)
{
    var profile = googleUser.getBasicProfile();
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("name",profile.getName());
        localStorage.setItem("pic",profile.getImageURL());
    }
    window.location.replace("https://jaahn1998.github.io/Inform/two.html");
}