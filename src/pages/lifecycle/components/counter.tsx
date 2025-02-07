// ------------------------------------------------------------------
// 클래스 컴포넌트 라이프사이클 메서드
import { Component } from 'react';
import { tm } from '@/utils/tw-merge';

// 속성(props)
interface Props {
  count?: number;
  step?: number;
  min?: number;
  max?: number;
}

// 상태(state)
interface State {
  count: number;
}

class Counter extends Component<Props, State> {
  // 기본 속성 값 설정
  static defaultProps: Required<Props> = {
    count: 0,
    step: 1,
    min: 0,
    max: 10,
  };

  // [라이프사이클 메서드]
  // 생성(constructor) 시점
  constructor(props: Props) {
    // 반드시 호출되어야 함!
    // React.Component 클래스를 슈퍼 클래스로 사용할 때 props를 전달해야 함
    super(props);

    // 컴포넌트 상태 선언
    // 클래스 인스턴스 멤버
    // this.state = {
    //   count: props.count ?? Counter.defaultProps.count,
    // };
  }

  // <클래스 필드>
  state = {
    count: this.props.count ?? Counter.defaultProps.count,
  };

  // [this 바인딩]
  // this.handleDecrease = this.handleDecrease.bind(this);
  // this.handleIncrease = this.handleIncrease.bind(this);
  // 과거 방식
  // 이벤트 핸들러를 화살표 함수로 정의하면 자동으로 this가 바인딩됨

  // <클래스 필드>

  // [라이프사이클 메서드] -------------------------------------------------------------
  // 렌더(render) 시점
  render() {
    // 컴포넌트 데이터(속성, 상태) 접근 가능
    console.log(this.props);
    console.log(this.state);

    return (
      <div className={tm('flex flex-col gap-3 items-start')}>
        <h2>카운터</h2>
        <output className={tm('text-react text-2xl font-bold')}>
          {this.state.count}
        </output>
        <div className={tm('flex gap-2')}>
          <button
            type="button"
            className={tm('bg-cyan-600 text-white rounded-full px-4.5 py-2')}
            onClick={this.handleDecrease}
          >
            -{this.props.step}
          </button>
          <button
            type="button"
            className={tm('bg-cyan-600 text-white rounded-full px-4 py-2')}
            onClick={this.handleIncrease}
          >
            +{this.props.step}
          </button>
        </div>
      </div>
    );
  }

  // <클래스 필드>
  clearIntervalsId: NodeJS.Timeout | number = 0;

  // [라이프사이클 메서드] -------------------------------------------------------------
  // 컴포넌트 마운트(component did mount) 이후 시점
  componentDidMount() {
    // 리액트 렌더링 프로세스와 상관없는 이펙트 실행 (사이드 이펙트 처리)
    // const clearId = setTimeout(() => {

    // 타이머 이벤트 구독
    this.clearIntervalsId = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
      // alert('타이머(사이드 이펙트) 처리');
      // clearTimeout(clearId);
      // console.log('타이머 클리어!');
    }, 1000);
  }

  // [라이프사이클 메서드] -------------------------------------------------------------
  // 컴포넌트 업데이트(component did update) 이후 시점
  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>
  ): void {
    console.group('이전 상태 값');
    console.log(prevProps);
    console.log(prevState.count);
    console.groupEnd();

    console.group('현재 상태 값');
    console.log(this.state.count);
    console.groupEnd();

    // 사이드 이펙트
    // 리액트 렌더링 프로세스와 상관없는 일처리
    if (this.state.count > 9) {
      document.body.classList.add('bg-react', 'text-white');
    } else {
      document.body.classList.remove('bg-react', 'text-white');
    }
  }

  // [라이프사이클 메서드] -------------------------------------------------------------
  // 컴포넌트 언마운트(component will unmount) 이전 시점
  componentWillUnmount() {
    console.log('Counter 언마운트 될 예정');
    // 타이머 이벤트 구독 해지
    console.log('타이머 이벤트 구독 해지');
    clearInterval(this.clearIntervalsId);
  }

  // <클래스 필드>
  // 이벤트 핸들러
  handleDecrease = () => {
    // console.log('감소', this);
    if (this.props.step) {
      this.setState({
        count: this.state.count - this.props.step,
      });
    }
  };

  handleIncrease = () => {
    // console.log('증가', this);
    if (this.props.step) {
      this.setState({
        count: this.state.count + this.props.step,
      });
    }
  };
}

export default Counter;
