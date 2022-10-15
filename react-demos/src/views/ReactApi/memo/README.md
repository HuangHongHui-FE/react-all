useMemo() 基本用法如下：

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
useMemo() 返回的是一个 memoized 值，只有当依赖项（比如上面的 a,b 发生变化的时候，才会重新计算这个 memoized 值）

memoized 值不变的情况下，不会重新触发渲染逻辑。

说起渲染逻辑，需要记住的是 useMemo() 是在 render 期间执行的，所以不能进行一些额外的副操作，比如网络请求等。

只有当依赖的 props.number 发生变化的时候，才会重新触发 useMemo() 包装的里面的 re-render