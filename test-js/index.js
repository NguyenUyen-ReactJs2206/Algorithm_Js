//Xoá các phần tử (giá trị nguyên thuỷ) trùng lặp trong mảng?
// Mảng ban đầu
const originalArray = [1, 2, 3, 4, 2, 5, 6, 1, 7];

//-Cách 1 - sử dụng Filter và indexOf
function removeDuplicates(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}

// Xoá phần tử trùng lặp
const uniqueArray1 = removeDuplicates(originalArray);

// Hiển thị kết quả trên DOM
const outputDiv1 = document.getElementById("output1");
outputDiv1.innerHTML = `<p>Mảng ban đầu: [${originalArray.join(", ")}]</p>`;
outputDiv1.innerHTML += `<p>Mảng sau khi xoá phần tử trùng lặp: [${uniqueArray1.join(
  ", "
)}]</p>`;

//Cách 2 - dùng Set()
const uniqueSet = new Set(originalArray);
const uniqueArray2 = [...uniqueSet];

const outputDiv2 = document.getElementById("output2");
outputDiv2.innerHTML = `<p>Mảng ban đầu: ${JSON.stringify(originalArray)}</p>`;
outputDiv2.innerHTML += `<p>Mảng sau khi xoá phần tử trùng lặp: [${uniqueArray2.join(
  ", "
)}]</p>`;

//Cách 3 - dùng vòng lặp
function remove(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var isDuplicate = false;
    // Kiểm tra xem phần tử đã tồn tại trong mảng kết quả chưa
    for (var j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    // Nếu không trùng lặp, thêm vào mảng kết quả
    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Xoá phần tử trùng lặp
const uniqueArray3 = remove(originalArray);

const outputDiv3 = document.getElementById("output3");
outputDiv3.innerHTML = `<p>Mảng ban đầu: ${JSON.stringify(originalArray)}</p>`;
outputDiv3.innerHTML += `<p>Mảng sau khi xoá phần tử trùng lặp: [${uniqueArray3.join(
  ", "
)}]</p>`;
