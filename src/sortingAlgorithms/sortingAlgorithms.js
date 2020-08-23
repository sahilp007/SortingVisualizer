export function getMergeSortAnimations(array) {
	const animations = [];
	if (array.length <= 1) return array;
	const tempArray  = array.slice();
	mergeSortHelper(array, 0, array.length - 1, tempArray , animations);
	return animations;
}

function mergeSortHelper(
	mainArray,
	startIdx,
	endIdx,
	tempArray,
	animations,
) {
	if (startIdx === endIdx) return;
	const middleIdx = Math.floor((startIdx + endIdx) / 2);
	mergeSortHelper(tempArray, startIdx, middleIdx, mainArray, animations);
	mergeSortHelper(tempArray, middleIdx + 1, endIdx, mainArray, animations);
	doMerge(mainArray, startIdx, middleIdx, endIdx, tempArray, animations);
}

function doMerge(
	mainArray,
	startIdx,
	middleIdx,
	endIdx,
	tempArray,
	animations,
) {
	let k = startIdx;
	let i = startIdx;
	let j = middleIdx + 1;
	while (i <= middleIdx && j <= endIdx) {
		animations.push([i, j]);
		animations.push([i, j]);

		if (tempArray[i] <= tempArray[j]) {
			animations.push([k, tempArray[i]]);
			mainArray[k++] = tempArray[i++];
		} else {
			animations.push([k, tempArray[j]]);
			mainArray[k++] = tempArray[j++];
		}
	}
	while (i <= middleIdx) {
		animations.push([i, i]);
		animations.push([i, i]);
		animations.push([k, tempArray[i]]);
		mainArray[k++] = tempArray[i++];
	}
	while (j <= endIdx) {
		animations.push([j, j]);
		animations.push([j, j]);
		animations.push([k, tempArray[j]]);
		mainArray[k++] = tempArray[j++];
	}
}