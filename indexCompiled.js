"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var makeDataObject = function makeDataObject(image, text) {
    return {
        image: image,
        text: text
    };
};

var setInnerHtml = function setInnerHtml(element, html) {
    element.innerHTML = html;
};

var peeps$ = Rx.Observable.from([makeDataObject("<img class='picture' src='./images/people-05.svg'>", "Yo"), makeDataObject("<img class='picture' src='./images/people-06.svg'>", "Hi")]).startWith(makeDataObject("IMAGE", "GREETING"));

var time$ = Rx.Observable.interval(1000);
time$.zip(peeps$).repeat().subscribe(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        time = _ref2[0],
        peep = _ref2[1];

    setInnerHtml(document.getElementsByClassName("picture")[0], peep.image);
    setInnerHtml(document.getElementsByClassName("text")[0], peep.text);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWlCO0FBQ3BDLFdBQU87QUFDSCxlQUFPLEtBREo7QUFFSCxjQUFNO0FBRkgsS0FBUDtBQUlILENBTEQ7O0FBT0EsSUFBTSxlQUFlLFNBQWYsWUFBZSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQW1CO0FBQ3BDLFlBQVEsU0FBUixHQUFvQixJQUFwQjtBQUNILENBRkQ7O0FBS0EsSUFBTSxTQUFTLEdBQUcsVUFBSCxDQUNWLElBRFUsQ0FDTCxDQUNGLGVBQWUsb0RBQWYsRUFBcUUsSUFBckUsQ0FERSxFQUVGLGVBQWUsb0RBQWYsRUFBcUUsSUFBckUsQ0FGRSxDQURLLEVBS1YsU0FMVSxDQUtBLGVBQWUsT0FBZixFQUF3QixVQUF4QixDQUxBLENBQWY7O0FBT0EsSUFBTSxRQUFRLEdBQUcsVUFBSCxDQUFjLFFBQWQsQ0FBdUIsSUFBdkIsQ0FBZDtBQUNBLE1BQU0sR0FBTixDQUFVLE1BQVYsRUFBa0IsTUFBbEIsR0FBMkIsU0FBM0IsQ0FBcUMsZ0JBQW1CO0FBQUE7QUFBQSxRQUFqQixJQUFpQjtBQUFBLFFBQVgsSUFBVzs7QUFDcEQsaUJBQWEsU0FBUyxzQkFBVCxDQUFnQyxTQUFoQyxFQUEyQyxDQUEzQyxDQUFiLEVBQTRELEtBQUssS0FBakU7QUFDQSxpQkFBYSxTQUFTLHNCQUFULENBQWdDLE1BQWhDLEVBQXdDLENBQXhDLENBQWIsRUFBeUQsS0FBSyxJQUE5RDtBQUNILENBSEQiLCJmaWxlIjoiaW5kZXhDb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgbWFrZURhdGFPYmplY3QgPSAoaW1hZ2UsIHRleHQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpbWFnZTogaW1hZ2UsXG4gICAgICAgIHRleHQ6IHRleHRcbiAgICB9XG59O1xuXG5jb25zdCBzZXRJbm5lckh0bWwgPSAoZWxlbWVudCwgaHRtbCkgPT4ge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcbn07XG5cblxuY29uc3QgcGVlcHMkID0gUnguT2JzZXJ2YWJsZVxuICAgIC5mcm9tKFtcbiAgICAgICAgbWFrZURhdGFPYmplY3QoXCI8aW1nIGNsYXNzPSdwaWN0dXJlJyBzcmM9Jy4vaW1hZ2VzL3Blb3BsZS0wNS5zdmcnPlwiLCBcIllvXCIpLFxuICAgICAgICBtYWtlRGF0YU9iamVjdChcIjxpbWcgY2xhc3M9J3BpY3R1cmUnIHNyYz0nLi9pbWFnZXMvcGVvcGxlLTA2LnN2Zyc+XCIsIFwiSGlcIilcbiAgICBdKVxuICAgIC5zdGFydFdpdGgobWFrZURhdGFPYmplY3QoXCJJTUFHRVwiLCBcIkdSRUVUSU5HXCIpKTtcblxuY29uc3QgdGltZSQgPSBSeC5PYnNlcnZhYmxlLmludGVydmFsKDEwMDApO1xudGltZSQuemlwKHBlZXBzJCkucmVwZWF0KCkuc3Vic2NyaWJlKChbdGltZSwgcGVlcF0pID0+ICB7XG4gICAgc2V0SW5uZXJIdG1sKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwaWN0dXJlXCIpWzBdLCBwZWVwLmltYWdlKTtcbiAgICBzZXRJbm5lckh0bWwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRleHRcIilbMF0sIHBlZXAudGV4dCk7XG59KTsiXX0=