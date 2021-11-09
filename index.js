const setup = (config) => {
    const setTitle = (title) => document.title = title;
    const appendMeta = (name, content) => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
    };
    const appendLinkRel = (rel, href) => {
        const link = document.createElement('link');
        link.setAttribute('rel', rel);
        link.setAttribute('href', href);
        document.head.appendChild(link);
    };
    const title = config.title.replace('{Name}', config.name).replace('{Desc}', config.desc);
    setTitle(title);
    appendMeta('description', config.desc);
    appendMeta('og:title', title);
    appendMeta('og:description', config.desc);
    appendMeta('og:image', config.image);
    appendMeta('og:secure_image', config.image);
    appendMeta('og:image:width', '1700');
    appendMeta('og:image:height', '1700');
    appendMeta('og:image:type', 'image/png');
    appendMeta('og:image:alt', config.name);
    appendMeta('og:url', document.location.href);
    appendMeta('og:type', 'website');
    appendMeta('og:site_name', config.name);
    appendMeta('og:locale', 'es_ES');
    appendMeta('profile:username', config.name);
    appendMeta('twitter_title', title);
    appendMeta('twitter_description', config.desc);
    appendMeta('twitter_image', config.image);
    appendMeta('twitter_card', 'summary_large_image');
    appendMeta('canonical', document.location.href);
    appendMeta('theme-color', config['theme-settings']['background-color']);
    appendMeta('msapplication-TileColor', config['theme-settings']['background-color']);
    appendMeta('msapplication-TileImage', config.image);
    appendLinkRel('apple-touch-icon', config.image);
    appendLinkRel('icon', config.image);
    appendLinkRel('shortcut icon', config.image);
    document.getElementById('desc').innerText = config.desc;
    document.getElementById('name').innerText = config.name;
    const linksEl = document.getElementById('links');
    config.links.forEach(link => link.id = btoa(link.url));
    config.links.forEach(link => {
        const a = document.createElement('a');
        a.setAttribute('href', link.url);
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
        a.id = link.id;
        const i = document.createElement('i');
        link.display.split(' ').forEach(_class => i.classList.add(_class));
        a.appendChild(i);
        a.classList.add('mx-2');
        linksEl.appendChild(a);
    });
    config.links.forEach(link => {
        const child = document.getElementById(link.id).children[0];
        child.setAttribute('style', "fill: white; pointer-events: none; width: 32px; height: 32px;")
    });
    if (config.repo && config.repo !== 'none' && config.repo !== 'null') {
        loadProjects(config.repo);
    }
};

const loadProjects = (repo) => {
    axios.get(`https://api.github.com/repos/${repo}/issues`).then(res => {
        if (res.data) {
            res.data.forEach(item => {
                const projects = document.getElementById('projects');
                const div = document.createElement('div');
                const data = item.body.replaceAll('\n', ':split:').replaceAll('\r', '').replaceAll('\n', '').split(':split:');
                if(item.labels.find(label => label.name === 'project-list')){
                    div.classList.add('flex', 'flex-row', 'items-center', 'p-2', 'w-full', 'rounded-lg', 'transition-all', 'duration-500', 'hover:shadow-2xl', 'cursor-pointer', 'mb-5');
                    div.style.backgroundColor = window.config['project-list-settings']['background-color'];
                    div.id = 'project-' + item.number;
                    const div2 = document.createElement('div');
                    div2.classList.add('flex', 'flex-col')
                    const h1 = document.createElement('h1');
                    if (window.config['project-list-settings']['title']['bold']) { h1.classList.add('font-bold'); }
                    h1.style.fontSize = window.config['project-list-settings']['title']['font-size'];
                    h1.style.color = window.config['project-list-settings']['title']['color'];
                    h1.innerText = item.title;
                    const p = document.createElement('p');
                    p.style.fontSize = window.config['project-list-settings']['description']['font-size'];
                    p.style.color = window.config['project-list-settings']['description']['color'];
                    data.forEach(i2 => {
                        if (i2.startsWith('body:')) {
                            p.innerText = i2.replace('body:', '');
                        } else if (i2.startsWith('url:')) {
                            div.onclick = () => window.open(i2.replace('url:', ''), '_blank');
                        }
                    });
                    let added = false
                    data.forEach(i1 => {
                        if(!added){
                            if(i1.startsWith('icon:')){
                                let icon = i1.replace('icon:', '');
                                if(icon && icon !== 'none' && icon !== 'null'){
                                    const img = document.createElement('img');
                                    img.src = icon
                                    img.classList.add('w-16', 'h-16', 'rounded-full')
                                    div.appendChild(img);
                                    div2.classList.add('ml-4')
                                    added = true;
                                }
                            }else if(i1.startsWith('fontawesomeicon:')){
                                let icon = i1.replace('fontawesomeicon:', '');
                                if(icon && icon !== 'none' && icon !== 'null'){
                                    const i = document.createElement('i');
                                    i.classList.add('fas', 'fa-5x', 'rounded-full')
                                    icon.split(' ').forEach(_class => i.classList.add(_class));
                                    div.appendChild(i);
                                    div2.classList.add('ml-4')
                                    added = true;
                                }
                            }
                        }
                    });
                    div2.appendChild(h1);
                    div2.appendChild(p);
                    div.appendChild(div2);
                    projects.appendChild(div);
                }
            });
        }
    }).catch(ignored => { });
};

// Setup using config.json
axios.get('config.json').then(res => {
    let config = window.config = res.data;
    document.querySelectorAll('body')[0].style.backgroundColor = config['theme-settings']['background-color'];
    ['p', 'h1', 'span', 'div'].forEach(elName => document.querySelectorAll(`${elName}`).forEach(el => el.style.color = config['theme-settings']['text-color']));
    document.getElementById('icon').src = config.image;
    document.getElementById('icon').alt = config.name;
    setup(config)
});