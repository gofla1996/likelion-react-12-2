function debounce<T = unknown>(callback: (...args: T[])=> void, timeout = 200 /* ms */) {
  let cleanup: ReturnType<typeof setTimeout>; /* clearTimeoutId */

  return (...args: T[]) => {
    // 타이머 정리
    clearTimeout(cleanup);
    // 타이머 설정
    cleanup = setTimeout(() => callback(...args), timeout /* 혹은 delay */);
  };
}

export default debounce;