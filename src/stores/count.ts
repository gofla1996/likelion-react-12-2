// Zustand 라이브러리 활용
// 카운트 상태 관리 스토어(store)
// 스토어(store) = 상태(state) + 액션(actions)

// 스토어 생성 함수를 전달받아 카운트 상태 관리 훅 생성하여 반환 함수
// create ()

// 미들웨어 활용
// - combine(state, createStoreWithOnlyActions)
// - devtolls()
// - persist()

// 어떤 상태를 관리할 것인가?
// - 얼만큼 값을 변경할 것인가?
// - 최소 또는 최대 값은 얼마로 할 것인가?
// count
// step
// min
// max

// 카운트 상태는 어떻게 변경할 것인가?
// [increment]
// [decrement]
// [reset]
// update
// setStep
// setMin
// setMax

import { create } from 'zustand';
import { combine } from 'zustand/middleware';

// 초기 상태
const initialState = {
  count: 1,
  step: 1,
  min: 1,
  max: 100,
};

// 파생된 상태

export const useCountStore = create(
  // 병합(combine) 미들웨어
  // 상태 + 스토어 생성 함수(액션만 포함)

  // 상태가 변경되면 화면이 리렌더링 된다.
  //
  combine({ ...initialState }, (set) => {
    return {
      increment: () =>
        set(({ count, step, max }) => {
          const nextCount = count + step;

          return {
            count: nextCount > max ? max : nextCount,
          };
        }),
      decrement: () =>
        set(({ count, step, min }) => {
          const nextCount = count - step;
          return {
            count: nextCount < min ? min : nextCount,
          };
        }),
      reset: () => set(initialState),
    };
  })
);
