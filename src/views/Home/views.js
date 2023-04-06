import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper";
import {
	HomeWrapper,
	Banner,
	BoxBanner,
	BannerLeft,
	Image,
	BoxSubTitle,
	ItemBrush,
	PositionText,
	BannerRight,
	BoxUpload,
	UrlUpload,
	WrapperStunning,
	ListButton,
	BoxSwiper,
	ImageSwiper,
	DescStunning,
	BoxDesc,
	DescLeft,
	DescRight,
	ImageDesc,
	WrapperPicture,
	ListPicture,
	PictureItem,
	ImagePictureItem
} from "./styles";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import { COLOR } from "~/utils/appConst";
import { Button } from "@mui/material";
import WebText from "~/components/WebText";

import { DecoBrush } from "~/assets/path";
import BannerImg from "~/assets/images/Banner.png";
import WebHeading from "~/components/WebHeading";
import PeopleOrigin from "~/assets/images/people-org.png";
import People from "~/assets/images/people.png";
import ProductOrigin from "~/assets/images/products-org.jpg";
import Product from "~/assets/images/products.png";
import AnimalsOrigin from "~/assets/images/animals-org.jpg";
import Animals from "~/assets/images/animals.png";
import CarsOrigin from "~/assets/images/cars-org.jpg";
import Cars from "~/assets/images/cars.png";
import GraphicsOrigin from "~/assets/images/graphics-org.png";
import Graphics from "~/assets/images/graphics.png";
import ImageDescStunn from "~/assets/images/DescStunning.png";
import PicturePeopleOrg from "~/assets/images/PicturePeopleOrg.jpg";
import PicturePeopleTrans from "~/assets/images/PicturePeopleTrans.jpg";
import PicturePeopleNew from "~/assets/images/PicturePeopleNew.png";
import PicturePeopleAndless from "~/assets/images/PicturePeopleAndless.jpg";

import PictureProductOrg from "~/assets/images/PictureProductOrg.jpg";
import PictureProductTrans from "~/assets/images/PictureProductTrans.jpg";
import PictureProductNew from "~/assets/images/PictureProductNew.jpg";
import PictureProductAndless from "~/assets/images/PictureProductAndless.jpg";

import PictureAnimalOrg from "~/assets/images/PictureAnimalOrg.jpg";
import PictureAnimalTrans from "~/assets/images/PictureAnimalTrans.jpg";
import PictureAnimalNew from "~/assets/images/PictureAnimalNew.jpg";
import PictureAnimalAndless from "~/assets/images/PictureAnimalAndless.png";

import PictureCarsOrg from "~/assets/images/PictureCarsOrg.png";
import PictureCarsTrans from "~/assets/images/PictureCarsTrans.png";
import PictureCarsNew from "~/assets/images/PictureCarsNew.png";
import PictureCarsAndless from "~/assets/images/PictureCarsAndless.png";

import PictureGraphicOrg from "~/assets/images/PictureGraphicOrg.jpg";
import PictureGraphicTrans from "~/assets/images/PictureGraphicTrans.jpg";
import PictureGraphicNew from "~/assets/images/PictureGraphicNew.png";
import PictureGraphicAndless from "~/assets/images/PictureGraphicAndless.png";
import { useNavigate } from "react-router-dom";
const LIST_STUNNING = [
	{
		id: 1,
		name: "People"
	},
	{
		id: 2,
		name: "Products"
	},
	{
		id: 3,
		name: "Animals"
	},
	{
		id: 4,
		name: "Cars"
	},
	{
		id: 5,
		name: "Graphics"
	}
];
const LIST_PICTURE = [
	{
		id: 1,
		name: "People"
	},
	{
		id: 2,
		name: "Products"
	},
	{
		id: 3,
		name: "Animals"
	},
	{
		id: 4,
		name: "Cars"
	},
	{
		id: 5,
		name: "Graphics"
	}
];
const TYPE_RENDER = {
	PEOPLE: "People",
	PRODUCTS: "Products",
	ANIMALS: "Animals",
	CARS: "Cars",
	GRAPHICS: "Graphics"
};
const TYPE_RENDER_PICTURE = {
	PEOPLE: "People",
	PRODUCTS: "Products",
	ANIMALS: "Animals",
	CARS: "Cars",
	GRAPHICS: "Graphics"
};
const LIST_PICTURE_IMAGE = [
	[
		{
			id: 1,
			name: "Original",
			image: PicturePeopleOrg
		},
		{
			id: 2,
			name: "Transparent background",
			image: PicturePeopleTrans
		},
		{
			id: 3,
			name: "New Background",
			image: PicturePeopleNew
		},
		{
			id: 4,
			name: "Endless possibilities",
			image: PicturePeopleAndless
		}
	],
	[
		{
			id: 1,
			name: "Original",
			image: PictureProductOrg
		},
		{
			id: 2,
			name: "Transparent background",
			image: PictureProductTrans
		},
		{
			id: 3,
			name: "New Background",
			image: PictureProductNew
		},
		{
			id: 4,
			name: "Endless possibilities",
			image: PictureProductAndless
		}
	],
	[
		{
			id: 1,
			name: "Original",
			image: PictureAnimalOrg
		},
		{
			id: 2,
			name: "Transparent background",
			image: PictureAnimalTrans
		},
		{
			id: 3,
			name: "New Background",
			image: PictureAnimalNew
		},
		{
			id: 4,
			name: "Endless possibilities",
			image: PictureAnimalAndless
		}
	],
	[
		{
			id: 1,
			name: "Original",
			image: PictureCarsOrg
		},
		{
			id: 2,
			name: "Transparent background",
			image: PictureCarsTrans
		},
		{
			id: 3,
			name: "New Background",
			image: PictureCarsNew
		},
		{
			id: 4,
			name: "Endless possibilities",
			image: PictureCarsAndless
		}
	],
	[
		{
			id: 1,
			name: "Original",
			image: PictureGraphicOrg
		},
		{
			id: 2,
			name: "Transparent background",
			image: PictureGraphicTrans
		},
		{
			id: 3,
			name: "New Background",
			image: PictureGraphicNew
		},
		{
			id: 4,
			name: "Endless possibilities",
			image: PictureGraphicAndless
		}
	]
];
const HomeScreen = () => {
	const [isActive, setIsActive] = useState(1);
	const [isRender, setIsRender] = useState(TYPE_RENDER.PEOPLE);
	const navigate = useNavigate();
	const [isActivePicture, setIsActivePicture] = useState(1);
	const [isRenderPicture, setIsRenderPicture] = useState(
		TYPE_RENDER_PICTURE.PEOPLE
	);
	const checkActiveButton = item => {
		setIsActive(item.id);
		setIsRender(item.name);
	};
	const checkActiveButtonPicture = item => {
		setIsActivePicture(item.id);
		setIsRenderPicture(item.name);
	};
	const RenderListSwiper = () => {
		switch (isRender) {
			case TYPE_RENDER.PEOPLE:
				return (
					<BoxSwiper>
						<Swiper
							navigation={true}
							modules={[Navigation, EffectCards]}
							effect='cards'
							loop={true}>
							<SwiperSlide>
								<ImageSwiper src={PeopleOrigin} />
							</SwiperSlide>
							<SwiperSlide>
								<ImageSwiper src={People} />
							</SwiperSlide>
						</Swiper>
					</BoxSwiper>
				);
			case TYPE_RENDER.PRODUCTS:
				return (
					<BoxSwiper>
						<Swiper
							navigation={true}
							modules={[Navigation, EffectCards]}
							effect='cards'
							loop={true}>
							<SwiperSlide>
								<ImageSwiper src={ProductOrigin} />
							</SwiperSlide>
							<SwiperSlide>
								<ImageSwiper src={Product} />
							</SwiperSlide>
						</Swiper>
					</BoxSwiper>
				);
			case TYPE_RENDER.ANIMALS:
				return (
					<BoxSwiper>
						<Swiper
							navigation={true}
							modules={[Navigation, EffectCards]}
							effect='cards'
							loop={true}>
							<SwiperSlide>
								<ImageSwiper src={AnimalsOrigin} />
							</SwiperSlide>
							<SwiperSlide>
								<ImageSwiper src={Animals} />
							</SwiperSlide>
						</Swiper>
					</BoxSwiper>
				);
			case TYPE_RENDER.CARS:
				return (
					<BoxSwiper>
						<Swiper
							navigation={true}
							modules={[Navigation, EffectCards]}
							effect='cards'
							loop={true}>
							<SwiperSlide>
								<ImageSwiper src={CarsOrigin} />
							</SwiperSlide>
							<SwiperSlide>
								<ImageSwiper src={Cars} />
							</SwiperSlide>
						</Swiper>
					</BoxSwiper>
				);
			case TYPE_RENDER.GRAPHICS:
				return (
					<BoxSwiper>
						<Swiper
							navigation={true}
							modules={[Navigation, EffectCards]}
							effect='cards'
							loop={true}>
							<SwiperSlide>
								<ImageSwiper src={GraphicsOrigin} />
							</SwiperSlide>
							<SwiperSlide>
								<ImageSwiper src={Graphics} />
							</SwiperSlide>
						</Swiper>
					</BoxSwiper>
				);
			default:
				break;
		}
	};
	const RenderListPicture = () => {
		switch (isRenderPicture) {
			case TYPE_RENDER_PICTURE.PEOPLE:
				return (
					<ListPicture>
						{LIST_PICTURE_IMAGE[0].map(item => (
							<PictureItem key={item.id}>
								<ImagePictureItem src={item.image} />
								<WebText margin={"8px 0 0 0"}>{item.name}</WebText>
							</PictureItem>
						))}
					</ListPicture>
				);
			case TYPE_RENDER_PICTURE.PRODUCTS:
				return (
					<ListPicture>
						{LIST_PICTURE_IMAGE[1].map(item => (
							<PictureItem key={item.id}>
								<ImagePictureItem src={item.image} />
								<WebText margin={"8px 0 0 0"}>{item.name}</WebText>
							</PictureItem>
						))}
					</ListPicture>
				);
			case TYPE_RENDER_PICTURE.ANIMALS:
				return (
					<ListPicture>
						{LIST_PICTURE_IMAGE[2].map(item => (
							<PictureItem key={item.id}>
								<ImagePictureItem src={item.image} />
								<WebText margin={"8px 0 0 0"}>{item.name}</WebText>
							</PictureItem>
						))}
					</ListPicture>
				);
			case TYPE_RENDER_PICTURE.CARS:
				return (
					<ListPicture>
						{LIST_PICTURE_IMAGE[3].map(item => (
							<PictureItem key={item.id}>
								<ImagePictureItem src={item.image} />
								<WebText margin={"8px 0 0 0"}>{item.name}</WebText>
							</PictureItem>
						))}
					</ListPicture>
				);
			case TYPE_RENDER_PICTURE.GRAPHICS:
				return (
					<ListPicture>
						{LIST_PICTURE_IMAGE[4].map(item => (
							<PictureItem key={item.id}>
								<ImagePictureItem src={item.image} />
								<WebText margin={"8px 0 0 0"}>{item.name}</WebText>
							</PictureItem>
						))}
					</ListPicture>
				);
			default:
				break;
		}
	};
	return (
		<HomeWrapper>
			<Banner>
				<BoxBanner>
					<BannerLeft>
						<Image src={BannerImg} />
						<WebHeading fontSize={58} fontWeight={600} margin={"0 0 0 0"}>
							Remove Image Background
						</WebHeading>
						<BoxSubTitle>
							<WebText fontSize={20} fontWeight={500}>
								100% Automatically and
							</WebText>
							<ItemBrush>
								<PositionText>
									<WebText fontSize={20} fontWeight={500}>
										Free
									</WebText>
								</PositionText>
								<DecoBrush />
							</ItemBrush>
						</BoxSubTitle>
					</BannerLeft>
					<BannerRight>
						<BoxUpload>
							<Button
								onClick={() => navigate("/upload")}
								variant='contained'
								sx={{
									borderRadius: 9999,
									fontSize: 22,
									textTransform: "none"
								}}>
								Upload Image
							</Button>
							<UrlUpload>
								<WebText fontSize={18} fontWeight={500} margin={"0"}>
									or drop a file,
								</WebText>
								<WebText fontSize={13} margin={"5px 0 0 0 "}>
									paste image or URL
								</WebText>
							</UrlUpload>
						</BoxUpload>
					</BannerRight>
				</BoxBanner>
			</Banner>
			<WrapperStunning>
				<WebHeading fontSize={48} fontWeight={600} margin={"24px 0 24px 0"}>
					Stunning Quality
				</WebHeading>
				<ListButton>
					{LIST_STUNNING.map((item, index) => (
						<Button
							key={index}
							sx={{
								padding: "10px 26px",
								borderRadius: 999,
								lineHeight: "1.5rem",
								color: COLOR.RBG_3,
								fontWeight: 600,
								backgroundColor: isActive === item.id && COLOR.RGB_1,
								marginRight: "15px",
								textTransform: "none",
								fontSize: "16px",
								":hover": {
									color: COLOR.RGB_4
								}
							}}
							onClick={() => checkActiveButton(item)}>
							{item.name}
						</Button>
					))}
				</ListButton>
				<RenderListSwiper />
			</WrapperStunning>

			<DescStunning>
				<BoxDesc>
					<DescLeft>
						<WebHeading fontSize={"32px"} fontWeight={600}>
							Remove backgrounds 100% automatically in 5 seconds with one click
						</WebHeading>
						<WebText fontSize={"16px"}>
							Thanks to remove.bg's clever AI, you can slash editing time - and
							have more fun!
						</WebText>
						<WebText fontSize={"16px"}>
							No matter if you want to make a background transparent (PNG) or
							add a white background to a photo - you can do all this and more
							with remove.bg.
						</WebText>
					</DescLeft>
					<DescRight>
						<ImageDesc src={ImageDescStunn} />
					</DescRight>
				</BoxDesc>
			</DescStunning>
			<WrapperPicture>
				<WebHeading fontSize={48} fontWeight={600} margin={"24px 0 24px 0"}>
					Just Picture It!
				</WebHeading>
				<ListButton>
					{LIST_PICTURE.map((item, index) => (
						<Button
							key={index}
							sx={{
								padding: "10px 26px",
								borderRadius: 999,
								lineHeight: "1.5rem",
								color: COLOR.RBG_3,
								fontWeight: 600,
								backgroundColor: isActivePicture === item.id && COLOR.RGB_1,
								marginRight: "15px",
								textTransform: "none",
								fontSize: "16px",
								":hover": {
									color: COLOR.RGB_4
								}
							}}
							onClick={() => checkActiveButtonPicture(item)}>
							{item.name}
						</Button>
					))}
				</ListButton>
				<RenderListPicture />
			</WrapperPicture>
		</HomeWrapper>
	);
};

export default HomeScreen;
