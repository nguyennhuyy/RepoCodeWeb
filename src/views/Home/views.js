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
	ImageSwiper
} from "./styles";
import "./styles.css";
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
import { COLOR } from "~/utils/appConst";

import "swiper/css";
import "swiper/css/navigation";
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
const TYPE_RENDER = {
	PEOPLE: "People",
	PRODUCTS: "Products",
	ANIMALS: "Animals",
	CARS: "Cars",
	GRAPHICS: "Graphics"
};
const HomeScreen = () => {
	const [isActive, setIsActive] = useState(1);
	const [isRender, setIsRender] = useState(TYPE_RENDER.PEOPLE);
	const checkActiveButton = item => {
		setIsActive(item.id);
		setIsRender(item.name);
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
		</HomeWrapper>
	);
};

export default HomeScreen;
