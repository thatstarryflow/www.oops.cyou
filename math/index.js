// 函数绘图的 JavaScript 代码
        function plotFunction() {
            const input = document.getElementById("function-input").value;
            const container = document.getElementById("plot-container");

            // 清空绘图容器
            container.innerHTML = "";

            try {
                // 创建绘图的数据
                const data = {
                    x: [],
                    y: [],
                    type: 'scatter',
                    mode: 'lines',
                };

                const processedInput = convertSpecialSymbols(input);

                // 计算函数值并填充数据
                for (let x = -10; x <= 10; x += 0.1) {
                    const y = eval(processedInput);
                    data.x.push(x);
                    data.y.push(y);
                }

                // 使用Plotly库绘制图像
                Plotly.newPlot(container, [data], {
                    title: '函数图像',
                    xaxis: { title: 'X轴' },
                    yaxis: { title: 'Y轴' }
                });

            } catch (error) {
                container.innerHTML = "<p>无法绘制图像，请输入有效的函数表达式。</p>";
            }
        }

        // 插入符号到输入框
        function insertSymbol(symbol) {
            const input = document.getElementById("function-input");
            const currentValue = input.value;
            const cursorPosition = input.selectionStart;
            const newValue = currentValue.slice(0, cursorPosition) + symbol + currentValue.slice(cursorPosition);
            input.value = newValue;

            // 重新设置光标位置
            input.selectionStart = cursorPosition + symbol.length;
            input.selectionEnd = cursorPosition + symbol.length;
            input.focus();
        }

        // 自定义函数，将特殊符号转换为JavaScript可以理解的形式
        function convertSpecialSymbols(input) {
            const symbolMap = {
                'π': 'Math.PI',
                '√': 'Math.sqrt',
                '^': '**',
                '∫': 'integralPlaceholder', // 自定义处理积分符号
                // 添加其他常用符号的映射
            };

            // 替换特殊符号
            const processedInput = input.replace(/[^A-Za-z0-9π√^∫()\-+*/.,]/g, ''); // 只保留合法字符
            return processedInput.replace(/π|√|\^|∫/g, match => symbolMap[match] || match);
        }