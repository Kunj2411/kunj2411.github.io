// Anim Morph

var morphing = anime({
  targets: '.morph',
	points: [
        //Debut
        { value: '460.677372 125.296036 108.040017 24.8652344 112.454079 125.296036' },
        //Fin
        { value: '460.677372 157.296036 112.758683 38.9677241 119.111306 145.719727' },
	],
  easing: 'easeInOutQuad',
  duration: 3000,
  loop: true
});

var morphing = anime({
  targets: '.morph2',
	points: [
        //Debut
        { value: '108.040017 24.8652344 168.780251 0 460.677372 125.296036' },
        //Fin
        { value: '112.758683 38.9677241 184.146186 0 460.677372 157.296036' },
	],
  easing: 'easeInOutQuad',
  duration: 3000,
  loop: true
});

var morphing = anime({
  targets: '.morph3',
	points: [
        //Debut
        { value: '75.3147561 38.1354167 460.677372 125.296036 0 68.5184024' },
        //Fin
        { value: '78.250435 57.8044647 460.677372 157.296036 0 100.518402' },
	],
  easing: 'easeInOutQuad',
  duration: 3000,
  loop: true
});


function copyEmail(e){
  console.log(e)
  e.classList.remove('iconMobileAnimation')
  e.classList.add('iconMobileAnimation')
  var contact = document.getElementsByClassName('contact')[document.getElementsByClassName('contact').length - 1]
  contact.classList.add('contactfocus')
  setTimeout(() => {
    contact.click()
  }, 500)
  setTimeout(() => {
    contact.classList.remove('contactfocus')
    e.classList.remove('iconMobileAnimation')
  }, 1000)
  e.setAttribute('href', '#');
}

// Copy to Clipboard
// Sources : https://alligator.io/js/copying-to-clipboard/

const ctcMail = document.querySelectorAll('.contact');

ctcMail.forEach(mail => {
  mail.addEventListener('click', () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(mail);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand('copy');
      selection.removeAllRanges();

      mail.getElementsByClassName('mail')[0].dataset.status = 'Copied!';
      mail.classList.add('success');

      setTimeout(() => {
        mail.classList.remove('success');
        mail.getElementsByClassName('mail')[0].dataset.status = 'Click to Copy';
      }, 1200);
    } catch(e) {}
  });
});


const allProjects = [

  {
    name: "Super Tic-Tac-Toe Game",
    description: "A board game composed of nine Tic Tac Toe boards arranged in a 3-by-3 grid",
    img: "images/tic-tac-toe.png",
    link: "https://kunj2411.github.io/Super-Tic-Tac-Toe/"
  },
  {
    name: "ATM - Attendance Taking Machine",
    description: "Face Recognition-based attendance system using Computer Vision.",
    img: "images/atm.png",
    link: "#"
  },
  {
    name: "Program Writter",
    description: "Automatically writes code while recording videos with a time-gap, useful for content creators.",
    img: "images/program-writter.png",
    link: "#"
  },
  {
    name: "pap.ai",
    description: "AI-based handwritten paper checker (Ongoing Project).",
    img: "images/pap-ai.png",
    link: "#"
  },
  {
    name: "Django Chatbot",
    description: "A chatbot system built using Django, integrated with NLP models.",
    img: "images/django-chatbot.png",
    link: "#"
  },
  {
    name: "House Price Prediction",
    description: "ML-based model to predict house prices using regression techniques.",
    img: "images/house-price.png",
    link: "#"
  },
  {
    name: "Drupal Module Development",
    description: "Custom Drupal modules built for performance optimization and feature extension.",
    img: "images/drupal.png",
    link: "#"
  },
  {
    name: "Automatic College Time-table Generator",
    description: "Generates optimized time-tables automatically using AI.",
    img: "images/timetable.png",
    link: "#"
  },
  {
    name: "IoT Hydroponic",
    description: "Smart monitoring system for hydroponics using IoT.",
    img: "images/hydroponic.png",
    link: "#"
  },
  {
    name: "GTU Marks Entry Tool",
    description: "Tool for faster marks entry into GTU system.",
    img: "images/marks-entry.png",
    link: "#"
  },
  {
    name: "Event Certificate Generator",
    description: "Auto-generates event certificates from participant data.",
    img: "images/certificate.png",
    link: "#"
  },
  {
    name: "ID Card Generator",
    description: "Bulk ID card generator from Excel data.",
    img: "images/id-card.png",
    link: "#"
  }
];

function loadProjects(x = 6) {
  const projectContainer = document.getElementById('projects');
  let shownProjects = allProjects.slice(0, x);
  let remainingProjects = allProjects.slice(x);

  let html = shownProjects.map(project => `
    <a href="${project.link}" target="_blank">
      <div class="header">
        <img src="${project.img}" alt="${project.name}">
        <p class="description">${project.description}</p>
      </div>
      <p class="figure">${project.name}</p>
    </a>
  `).join('');

  projectContainer.innerHTML = html;

  if (remainingProjects.length > 0) {
    window.remainingProjects = remainingProjects;
    document.getElementById('remainingProjectsCount').innerText = remainingProjects.length;
  } else {
    document.querySelector('.exploration-view-more').style.display = 'none';
  }
}

function loadMore(e) {
  const projectContainer = document.getElementById('projects');
  const moreHTML = window.remainingProjects.map(project => `
    <a href="${project.link}" target="_blank">
      <div class="header">
        <img src="${project.img}" alt="${project.name}">
        <p class="description">${project.description}</p>
      </div>
      <p class="figure">${project.name}</p>
    </a>
  `).join('');

  projectContainer.innerHTML += moreHTML;
  e.remove(); // Remove the "Show More" button
}

// function loadProjects(x = 0) {
//   fetch('https://api.github.com/users/kunj2411/repos?page=1&per_page=100').then((resp) => resp.json()).then(data => {
//     data.sort(function (a, b) {
//       var keyA = a.id,
//         keyB = b.id;
//       // Compare the 2 dates
//       if (keyA < keyB) return 1;
//       if (keyA > keyB) return -1;
//       return 0;
//     });
//     projects = []
//     data.forEach(repo => {
//       if (repo.has_pages) {
//         template = `
//         <a href="https://kunj2411.github.io/${repo.name}" target="_blank">
//           <div class="header">
//             <img src="/projects/images/${repo.name}.png" alt="chrome extension">
//             <p class="description">${repo.description}</p>
//           </div>
//           <p class="tag">Created ${moment(repo.created_at).fromNow()}</p>
//           <p class="figure">${repo.name.replace(/-/g, ' ')}</p>
//         </a>
//               `
//         // template = `
//         //         <div class="col-md-4 mb-2">
//         //         <div class="card" style="width: 100%;height: 100%">
//         //           <div class="card-img"><img src="` + `/projects/images/` + repo.name + `.png" onerror="" class="card-img-top"
//         //             alt="⌛ Loading ` + repo.name.replace(/-/g, ' ') + ` Thumbnail.">
//         //             <div class="updated"><i class="fa fa-clock-o" aria-hidden="true"></i> Created ` + moment(repo.created_at).fromNow() + `. </div>
//         //             <div class="open-source-code"><a href="` + repo.html_url + `" target="_blank">
//         //             Source Code <i class="fa fa-book" aria-hidden="true"></i> </a></div>
//         //           </div>
//         //           <div class="card-body">
//         //             <h5 class="card-title"><a href="https://temahux.github.io/` + repo.name + `" target="_blank"> <i class="fa fa-github" aria-hidden="true"></i> ` + repo.name.replace(/-/g, ' ') + `</a></h5>
//         //             <p class="card-text">` + repo.description + `</p>
//         //             <br><br>
//         //             <a href="https://temahux.github.io/` + repo.name + `" target="_blank"
//         //               class="btn btn-primary open-project-btn"> Open Working Project &nbsp; <i class="fa fa-share-square-o" aria-hidden="true"></i></a>
//         //           </div>
//         //         </div>
//         //       </div>
//         //       `
//         projects.push(template);
//       }
//     });

    

//     window.remainingProjects =  projects.join('');
//     document.getElementById('remainingProjectsCount').innerHTML = projects.length - x
//     document.getElementById('projects').innerHTML = projects.splice(0, x).join('');
//     console.log(projects)
//   }).catch(error => console.log(error));
// }


// function loadMore(e){
//   document.getElementById('projects').innerHTML = window.remainingProjects;
//   e.remove()
// }

function cl(){
  var contact = document.getElementsByClassName('contact')[document.getElementsByClassName('contact').length - 1]
  contact.classList.add('contactfocus')
  setTimeout(() => {
    contact.click()
  }, 500)
  setTimeout(() => {
    contact.classList.remove('contactfocus')
  }, 1000)
}

if(window.location.href.substr(-7) == "contact"){
  setTimeout(() => {
    var scroll = new SmoothScroll();
    scroll.animateScroll(document.body.scrollHeight);
  },1000)

  document.addEventListener('scrollStop', cl, false);
}




