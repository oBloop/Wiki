var front;
if (window.location.hostname === "127.0.0.1:5500") {
    front = "/docs/Site/";
} else {
    front = "/Wiki/Site/";
}

function Navigate(_page) {

    var univers = front + "Pages/Univers/";

    switch (_page)
    {
        case 'Univers':
        case 'Races':
            Nav(univers + _page);
            break;
        default:
            Nav(front + "index")
            break;
    }
}

function Nav(_thisPage) {
    window.location.href = _thisPage + ".html";
}

function LoadPageStyles(_page) {
    document.title = "o'Pelagos - " + _page;
    if (_page == 'index') document.title = "o'Pelagos - Wiki";

    // Créer un élément link pour l'icône favicon
    var faviconLink = document.createElement("link");
    faviconLink.rel = "icon";
    faviconLink.href = front + "IMG/ICO/ICO.ico";
    
    // Créer un élément link pour la feuille de style
    var cssLink = document.createElement("link");
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    cssLink.href = front + "CSS/" + _page + ".css";

    // Ajouter l'élément link au head de la page
    document.head.appendChild(cssLink);
    document.head.appendChild(faviconLink);

    Viewport();
}

function Viewport()
{
    // Créer un élément meta pour le jeu de caractères
    var metaCharset = document.createElement("meta");
    metaCharset.setAttribute("charset", "UTF-8");

    // Créer un élément meta pour la compatibilité avec IE
    var metaIE = document.createElement("meta");
    metaIE.setAttribute("http-equiv", "X-UA-Compatible");
    metaIE.setAttribute("content", "IE=edge");

    // Créer un élément meta pour la viewport
    var metaViewport = document.createElement("meta");
    metaViewport.setAttribute("name", "viewport");
    metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");

    // Ajouter les éléments meta au head de la page
    var head = document.head || document.getElementsByTagName("head")[0];
    head.appendChild(metaCharset);
    head.appendChild(metaIE);
    head.appendChild(metaViewport);
}