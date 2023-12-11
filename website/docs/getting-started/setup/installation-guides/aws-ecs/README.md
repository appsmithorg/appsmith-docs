# AWS ECS

Explore the resources below to set up your Appsmith installation on Amazon Elastic Container Service (ECS) using Amazon Elastic Compute Cloud (EC2) or Amazon Elastic Container Service (ECS) using Amazon Fargate. You will also find instructions on migrating your existing Appsmith installation on an ECS cluster using Bind Mount volume to Amazon Elastic File System (EFS).

<div class="containerGridSampleApp">

   <div class=" containerColumnSampleApp columnGrid column-one">
      <div class="containerCol">
         <svg class="containerImage w-6 h-6" style= {{width:"50px", height:"50px", 'margin-bottom': "4px", 'margin-top': "8px"}} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_Amazon-EC2_32_svg__a"><stop stop-color="#C8511B" offset="0%"></stop><stop stop-color="#F90" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-EC2_32_svg__a)"></path><path d="M26.052 27L26 13.948 13 14v13.052L26.052 27zM27 14h2v1h-2v2h2v1h-2v2h2v1h-2v2h2v1h-2v2h2v1h-2v.052a.95.95 0 01-.948.948H26v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-.052a.95.95 0 01-.948-.948V27h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-.052a.95.95 0 01.948-.948H13v-2h1v2h2v-2h1v2h2v-2h1v2h2v-2h1v2h2v-2h1v2h.052a.95.95 0 01.948.948V14zm-6 19H7V19h2v-1H7.062C6.477 18 6 18.477 6 19.062v13.876C6 33.523 6.477 34 7.062 34h13.877c.585 0 1.061-.477 1.061-1.062V31h-1v2zM34 7.062v13.876c0 .585-.476 1.062-1.061 1.062H30v-1h3V7H19v3h-1V7.062C18 6.477 18.477 6 19.062 6h13.877C33.524 6 34 6.477 34 7.062z" fill="#FFF"></path></g></svg>
      </div>
      <b><a href="/getting-started/setup/installation-guides/aws-ecs/aws-ecs-on-ec2">AWS ECS on EC2</a></b>
      <div class="containerDescription"> 
      </div>
   </div>

   <div class="containerColumnSampleApp columnGrid column-two">
   <div class="containerCol">
         <svg class="containerImage w-6 h-6" style= {{width:"50px", height:"50px", 'margin-bottom': "4px", 'margin-top': "8px"}} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_AWS-Fargate_32_svg__a"><stop stop-color="#C8511B" offset="0%"></stop><stop stop-color="#F90" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_AWS-Fargate_32_svg__a)"></path><path d="M26.873 29.343v-3.429l1.968-.666v3.386l-1.968.709zm-2.944-1.335v-2.76l1.962.665v3.43l-1.962-.71v-.625zm-.982 4.079l-1.968.707v-3.427l1.968-.666V32.086zm-4.912-3.1V28.7l1.962.665v3.428l-1.962-.707v-3.1zm-2.95.356v-3.429l1.968-.666V28.634l-1.968.709zm-2.944-4.095l1.962.665v3.43l-1.962-.71v-3.385zm2.453-1.175l1.404.48-1.404.476-1.4-.476 1.4-.48zm5.894 3.452l1.404.48-1.404.475-1.4-.475 1.4-.48zm5.894-3.452l1.404.48-1.404.476-1.4-.476 1.4-.48zm3.106.01l-2.95-1.01a.482.482 0 00-.313 0l-2.944 1.01a.5.5 0 00-.334.473v2.757l-2.303-.787a.482.482 0 00-.313 0l-2.296.787v-2.757a.499.499 0 00-.335-.473l-2.95-1.01a.482.482 0 00-.313 0l-2.944 1.01a.5.5 0 00-.334.473v4.43c0 .21.13.4.327.47l2.944 1.063a.486.486 0 00.328 0l2.295-.826v2.746c0 .21.13.4.327.47l2.944 1.062a.486.486 0 00.328 0l2.95-1.062a.5.5 0 00.327-.47v-2.746l2.29.826a.486.486 0 00.327 0l2.95-1.063a.5.5 0 00.327-.47v-4.43a.499.499 0 00-.335-.473zM33 17.606c0 3.077-6.697 4.737-13 4.737s-13-1.66-13-4.737c0-1.463 1.604-2.754 4.52-3.634l.28.956c-2.355.712-3.818 1.738-3.818 2.678 0 1.77 4.935 3.738 12.018 3.738 7.083 0 12.018-1.969 12.018-3.738 0-.722-.864-1.509-2.37-2.156l.384-.919C32.485 15.586 33 16.786 33 17.606zM20.491 8.03l5.448 2.014-5.448 2.039-5.448-2.039 5.448-2.014zm5.618 10.14c-1.008.458-2.701.992-5.127 1.06v-6.267l5.894-2.206v6.219c0 .512-.301.98-.767 1.193zm-12.003-1.194v-6.219L20 12.963v6.266c-2.425-.067-4.119-.6-5.126-1.06a1.316 1.316 0 01-.768-1.193zm.366 2.104c1.163.53 3.15 1.16 6.02 1.16 2.869 0 4.856-.63 6.019-1.16a2.316 2.316 0 001.348-2.104V10.04c0-.21-.13-.397-.324-.469L20.66 7.03a.486.486 0 00-.336 0l-6.876 2.542a.499.499 0 00-.323.468v6.936c0 .904.53 1.73 1.348 2.104z" fill="#FFF"></path></g></svg>
      </div>
      <b><a href="/getting-started/setup/installation-guides/aws-ecs-on-fargate">AWS ECS on Fargate</a></b>
      <div class="containerDescription"> 
      </div>
   </div>
 
</div> 

<div class="containerGridSampleApp">
   <div class="containerColumnSampleApp columnGrid column-one">
    <div class="containerCol">
         <svg class="containerImage w-6 h-6" style= {{width:"50px", height:"50px", 'margin-bottom': "4px", 'margin-top': "8px"}} xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_Amazon-Elastic-File-System_32_svg__a"><stop stop-color="#C8511B" offset="0%"></stop> <stop stop-color="#F90" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-Elastic-File-System_32_svg__a)"></path><path d="M33 29h1v4.5a.5.5 0 01-.5.5H29v-1h3.293l-3.647-3.646.708-.708L33 32.293V29zm-21.646.354L7.707 33H11v1H6.5a.5.5 0 01-.5-.5V29h1v3.293l3.646-3.647.708.708zM34 6.5V11h-1V7.707l-3.646 3.647-.708-.708L32.293 7H29V6h4.5a.5.5 0 01.5.5zM7 11H6V6.5a.5.5 0 01.5-.5H11v1H7.707l3.647 3.646-.708.708L7 7.707V11zm5.474 5.31c0 .229.018.458.044.678a.5.5 0 01-.376.544c-1.065.264-2.85 1.088-2.85 3.63l.007.235c.082 1.505 1.074 2.781 2.526 3.283l-.326.945c-1.839-.635-3.094-2.26-3.197-4.139a7.425 7.425 0 01-.01-.324c0-2.173 1.185-3.821 3.193-4.481a7.62 7.62 0 01-.011-.371c0-2.439 1.65-4.97 3.838-5.887 2.555-1.072 5.267-.537 7.249 1.427a7.277 7.277 0 011.47 2.133c1.6-1.26 4.501-.695 4.902 2.578 2.485.639 3.848 2.272 3.848 4.63 0 2.601-1.413 3.704-2.597 4.171l-.368-.931c1.323-.52 1.965-1.58 1.965-3.24 0-2.003-1.149-3.26-3.417-3.736a.499.499 0 01-.396-.46c-.108-1.827-1.148-2.644-2.132-2.644-.611 0-1.189.3-1.582.824a.497.497 0 01-.87-.133c-.35-.978-.878-1.837-1.528-2.483-.809-.801-3.028-2.526-6.158-1.213-1.808.757-3.224 2.938-3.224 4.964zM26 29H14v-7.5c0-.211.04-.369.109-.433.079-.075.257-.074.391-.067h1.397a.51.51 0 00.5-.498c.003-.099.07-.347.133-.503l1.857-.008c.046.156.088.393.088.509a.5.5 0 00.5.5l6.7-.001c.118-.009.157.024.17.036.075.07.155.291.155.698V29zm2.307-6.5L27 26.419V22.5h1.307zm1.168-.342A.499.499 0 0029 21.5h-2.016c-.035-.533-.183-.94-.457-1.196a1.144 1.144 0 00-.886-.304h-6.227c-.085-.401-.286-.911-.768-1h-2.334c-.496 0-.727.564-.833 1l-.945.001c-.455-.032-.836.08-1.107.335-.283.264-.427.656-.427 1.164v8a.5.5 0 00.5.5h13a.497.497 0 00.469-.344l.006.002 2.5-7.5z" fill="#FFF"></path></g></svg>
      </div> 
      <b><a href="/getting-started/setup/installation-guides/aws-ecs/migrate-bind-mount-to-efs">Migrate Bind Mount to AWS EFS</a></b>
      <div class="containerDescription">
   </div>
   </div>
   <div class="columnGrid column-two" style={{padding:"20px"}}></div>
</div>