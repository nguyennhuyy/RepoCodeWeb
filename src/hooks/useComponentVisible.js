import { useState, useEffect, useRef } from "react";

const useComponentVisible = initValue => {
	const [isComponentVisible, setIsComponentVisile] = useState(initValue);
	const ref = useRef(null);
	const handleClickOutside = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsComponentVisile(prev => !prev);
		}
	};
	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);
	return { ref, isComponentVisible, setIsComponentVisile };
};

export default useComponentVisible;
