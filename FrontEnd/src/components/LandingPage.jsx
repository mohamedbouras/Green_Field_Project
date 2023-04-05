import React,{useEffect} from 'react'
import './LandingPage.scss'
import NaveBaree from './NaveBaree'
import EFouuter from './EFouuter'
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {

	const navigate = useNavigate()
  return (
    <div>
		<NaveBaree/>
		<section class="dark">
	<div class="container py-4">
		<h1 class="h1 text-center" id="pageHeaderTitle" style={{color:"white"}} >E-education Academy</h1>

		<article class="postcard dark blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://img.freepik.com/photos-gratuite/enfant-reussie-graduation-cap-sac-dos-rempli-livres_1098-3455.jpg?w=1380&t=st=1680713065~exp=1680713665~hmac=0f48be04a9f8cdb4f535ed34382d4cf8356fcc690df8568b68bf84e93f843549" alt="Image Title" 
				onClick={()=> navigate("/container")}
				/>
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title blue"><a href="/container">Free Courses</a></h1>
				<div class="postcard__subtitle small">
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
			</div>
			
		</article>
		<article class="postcard dark red">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://img.freepik.com/photos-gratuite/petit-garcon-fier-lunettes-casquette-graduation_1098-3424.jpg?w=1380&t=st=1680713104~exp=1680713704~hmac=a4a44953fb26afdce4a02ab502d244673779471d43d3edd0afbe05f99b0e1aab" alt="Image Title" />	
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title red"><a href="#">Private Courses</a></h1>
				<div class="postcard__subtitle small">
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
			</div>
		</article>
	</div>
</section>

<section class="light">
	<div class="container py-2">
		<div class="h1 text-center text-dark" id="pageHeaderTitle">Our Gold Package</div>

		<article class="postcard light blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src="https://img.freepik.com/photos-gratuite/heureux-jeune-ecolier-portant-sac-dos-tenant-livre_141793-129933.jpg?w=1380&t=st=1680712889~exp=1680713489~hmac=57ac8d84b042f5e22ea98ffbe3adb0ada15bc0b2eae5166b163a266c537bc01d" alt="Image Title" />
			</a>
			<div class="postcard__text t-dark">
				<h1 class="postcard__title blue"><a href="#">Gold Package</a></h1>
				<div class="postcard__subtitle small">
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
			</div>
		</article>
		
		
		
	</div>
</section>
<EFouuter/>
</div>
  )
}

export default LandingPage