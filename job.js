document.addEventListener("DOMContentLoaded", function(){
  const form = document.forms[0]
  const desc = form.elements['description'].value
  const location = form.elements['location'].value
  let full_time = form.elements['full_time'].checked
  const btn = document.querySelector('.pagination-next')
  let page = 2
  
  btn.addEventListener('click', function(){

    if (full_time){
      full_time = 'on'
    }else{
      full_time = ''
    }

    
    let url = `https://still-spire-37210.herokuapp.com/positions.json?description=${desc}&location=${location}&full_time=${full_time}&page=${page}`
    getdata(url)
    
    page += 1
    
  })

  form.addEventListener('submit', function(e){
    
    if (full_time){
      full_time = 'on'
    }else{
      full_time = ''
    }

    let url = `https://still-spire-37210.herokuapp.com/positions.json?description=${desc}&location=${location}&full_time=${full_time}`
  
    getdata(url)
    
  })

})

function getdata(url){
  fetch(url)
    .then((response) => response.json())
    .then((datas) => {
      datas.forEach(element=>{
      let template = document.querySelector('template')
      let panel = document.querySelector('#job-pannel')
      let title = template.content.querySelector('h4 a')
          title.setAttribute('href', element.url)
          title.textContent = element.title

      let company = template.content.querySelector('.company')
          company.setAttribute('href', element.company_url)
          company.textContent = element.company

          template.content.querySelector('.location').textContent = element.company
          template.content.querySelector('.fulltime').textContent = element.type
          const clone = document.importNode(template.content, true)
        panel.prepend(clone)
      })
      if(datas.length%50 === 0){
        document.querySelector('.pagination-next').removeAttribute('disabled')
      }
    })
  }
// function()

// company: "AMORELIE"
// company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbStJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c67b95c08dd6189dd39d6ff215771c8eba36929f/Amorelie.png"
// company_url: "https://www.amorelie.de/"
// created_at: "Wed Aug 19 13:53:39 UTC 2020"
// description: "<p>With AMORELIE we have changed an entire industry and brought love life as an integral part of a happy relationship into the middle of society. We burn for fulfilled relationships and want to do our part with great love toys, lingerie and many other inspiring lifestyle products. With us, you will find a combination of ambitious ideas, an entrepreneurial team, a unique corporate culture and an incredible energy and euphoria for our mission. We are a successful, profitable Berlin start-up with over 130 employees and a lot of love, which defines the relationships of tomorrow!</p>↵↵<p>Wir haben mit AMORELIE eine ganze Branche verändert und das Liebesleben als integralen Bestandteil einer glücklichen Beziehung in die Mitte der Gesellschaft geholt. Wir brennen für erfüllte Beziehungen und wollen unseren Teil mit tollen Love Toys, Dessous und vielen weiteren inspirierenden Lifestyle Produkten dazu beitragen. Bei uns triffst du auf eine Kombination aus ambitionierten Ideen, einem unternehmerischen Team, einer einzigartigen Unternehmenskultur und einer unglaublichen Energie und Euphorie für unsere Mission. Wir sind ein erfolgreiches, profitables Berliner Startup mit über 130 Mitarbeitern und viel Liebe, welches die Beziehungen von morgen definiert!</p>↵<p><strong>Job ToDo's</strong></p>↵<ul>↵<li>Together with our Director IT and our engineering teams, you improve and maintain our system landscape and architecture by designing and implementing technical solutions for our entire stack</li>↵<li>You work closely with our in-house and distributed team of engineers and you are committed to continuously improve our systems, development practices and agile development processes</li>↵<li>You collaborate in technical reviews to strengthen our architecture and system designs</li>↵<li>You provide technical guidance by coaching our teams on technical skills, best practices and coding guidelines</li>↵<li>You partner closely with the product team to work towards the products vision</li>↵</ul>↵<p><strong>Our Tech Stack:</strong></p>↵<ul>↵<li>Magento 2 cloud architecture</li>↵<li>In-house Ruby on Rails CRM</li>↵<li>Kubernetes cluster for application deployment</li>↵</ul>↵<p><strong>Skills</strong></p>↵<ul>↵<li>You have several years of experience in Software Engineering, most of it developing PHP and Ruby on Rails applications</li>↵<li>Ideally, you have worked in eCommerce before</li>↵<li>You have strong experience in building APIs</li>↵<li>You have experience with Cloud architecture (AWS)</li>↵<li>You live agile development processes</li>↵<li>You set high standards in regards to code quality and test automation</li>↵<li>You are a team player, curious and proactive in proposing new technical solutions</li>↵<li>You love having ownership and you are reliable lead engineer</li>↵<li>You have strong communication skills with technical and non-technical colleagues</li>↵<li>You are fluent in English (written and spoken)</li>↵</ul>↵<p><strong>AMORELIE Benefits</strong></p>↵<ul>↵<li>An international team with highly motivated employees and an open feedback culture that ensures that you can develop your full potential with us</li>↵<li>Challenging projects with a lot of entrepreneurial scope, which you and your teams can drive forward on your own responsibility</li>↵<li>We are sitting in a bright open-plan office, near S+U Gesundbrunnen</li>↵<li>Free drinks, fresh fruit and a full fridge with treats</li>↵<li>Keep fit and benefit from our discounted membership with the Urban Sports Club</li>↵<li>... and of course exclusive discounts on our sensual assortment</li>↵</ul>↵<p><img src="https://camo.githubusercontent.com/bceebcd214fbbb7e85e2b1cd93399fc98b780e7c/68747470733a2f2f747261636b696e672e676f686972696e672e636f6d2f682f37383931653536323063633638633665366537313832653738356532653533353861356630303334326335303938663937643465646131313565343433346536"></p>↵"
// how_to_apply: "<p><a href="https://tracking.gohiring.com/h/7937d2291011565ae18ac321f0acbb917f06a47f3f9819ec6d9dfe29678d1327">application form</a></p>↵"
// id: "028821db-1f83-4ba2-876f-7ec065b69138"
// location: "Berlin"
// title: "Lead Software Engineer (f/m/x)"
// type: "Full Time"
// url: "https://jobs.github.com/positions/028821db-1f83-4ba2-876f-
// <template>
// <tr>
//   <td>
//     <h4><a href="https://jobs.github.com/positions/850281e8-4f0f-4952-88e4-ddf121e77188">Senior Python / C++ Developer (Electronics field)</a></h4>
//     <p class="source">
//     <a class="company" href="https://jobs.github.com/companies/gemeente-amsterdam">Gemeente Amsterdam</a>
//     –
//     <strong class="fulltime">Full Time</strong>
//     </p>
//   </td>
//   <td class="meta">
//     <span class="location">Amsterdam</span>
//   </td>
// </tr>
// </template>