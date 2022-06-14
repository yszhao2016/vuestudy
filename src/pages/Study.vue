<template>
    <div>
        <div>
            <span>Message: {{ msg }}</span>
        </div>
        <div>
            <span v-once>这个将不会改变: {{ msg }}</span>
        </div>
        <div>
            <p>Using mustaches: {{ rawHtml }}</p>
            <p>Using v-html directive: <span v-html="rawHtml"></span></p>
        </div>
        <div>
            <div v-bind:id="dynamicId">123</div>
        </div>
        <div>
            <button v-bind:disabled="isButtonDisabled">Button</button>
        </div>

        <div>
            <p v-if="seen">v-if 指令将根据表达式 seen 的值的真假来插入/移除
            <p> 元素。</p>
        </div>
        v-bind 指令可以用于响应式地更新 HTML attribute：

        <a v-bind:href="url" target="_blank">...</a>


        <div id="example">
            <p>计算属性：</p>
            <p>Original message: "{{ message }}"</p>
            <p>Computed reversed message: "{{ reversedMessage }}"</p>
        </div>

        <div id="example-1">
            <button v-on:click="counter += 1">Add 1</button>
            <p>The button above has been clicked {{ counter }} times.</p>
        </div>


        <div id="example-2">
            <!-- `greet` 是在下面定义的方法名 -->
            <button v-on:click="greet">Greet</button>
        </div>



        <div id="example-3">
            <button @click="say('hi')">Say hi</button>
            <button @click="say('what')">Say what</button>
            <button @click="warn('Form cannot be submitted yet.', $event)">
                Submit
            </button>

            <!-- 阻止单击事件继续传播 -->
            <a v-on:click.stop="doThis">12123</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Study",
        data() {
            return {
                'msg': "文本标签span",
                'rawHtml': "<span style='color: red'><b>This should be red.</b></span>",
                "dynamicId": 12,
                'isButtonDisabled': true,
                'seen': false,
                'url': "http://www.baidu.com",
                'message': "abc",
                counter: 0,
                name: 'Vue.js'
            };
        },
        methods: {
            greet: function (event) {
                // `this` 在方法里指向当前 Vue 实例
                alert('Hello ' + this.name + '!')
                // `event` 是原生 DOM 事件
                if (event) {
                    alert(event.target.tagName)
                }
            },
            say: function (message) {
                alert(message)
            },
            warn: function (message, event) {
                // 现在我们可以访问原生事件对象
                if (event) {
                    event.preventDefault()
                }
                alert(message)
            }
        },
        computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            }
        }
    }


    // var example1 = new Vue({
    //     el: '#example-1',
    //     data: {
    //         counter: 0
    //     }
    // })
</script>

<style scoped>

</style>