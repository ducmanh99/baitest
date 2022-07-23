import React from 'react'

const Ex2 = () => {
  const weight = [60, 40, 55, 75, 64];
const total = (a) => {
	let weigh1 = 0;
	let weigh2 = 0;
	for ( let i = 0; i < a.length; i++) {
		if (i % 2 === 0) {
			weigh1 = weigh1 + a[i];
		} else weigh2 = weigh2 + a[i];
	}
	const tong = [weigh1, weigh2];
	return tong;
};
console.log(total(weight));
  
  return (
    <div>Ex2</div>
  )
  }

export default Ex2