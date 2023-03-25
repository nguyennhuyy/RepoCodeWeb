import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
const useComponentVisible = initValue => {
	const location = useLocation();
	const [isComponentVisible, setIsComponentVisile] = useState(initValue);
	const ref = useRef(null);
	const handleClickOutside = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsComponentVisile(false);
		}
	};
	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);
	useEffect(() => {
		setIsComponentVisile(false);
	}, [location]);
	return { ref, isComponentVisible, setIsComponentVisile };
};

export default useComponentVisible;
