<template>
  <div class="page page-calculator">
    <ScrollToCalculator />
    <h1 class="page__title">
      Расчёт параметров рент
    </h1>
    <div class="row">
      <div class="col-12">
        <h3 class="text-center">
          Годовая рента
        </h3>
        <p>
          Начнем с наиболее простого случая - годовой ренты постнумерандо. Пусть в течение
          <vue-latex :expression="'n'" :fontsize="latex_fontsize"/>
          лет в банк в конце каждого года вносится по
          <vue-latex :expression="'R'" :fontsize="latex_fontsize"/>
          рублей. На взносы начисляются сложные проценты по ставке
          <vue-latex :expression="'i\\%'" :fontsize="latex_fontsize"/>
          годовых. Таким образом, имеется рента, член которой равен
          <vue-latex :expression="'R'" :fontsize="latex_fontsize"/>,
          а срок -
          <vue-latex :expression="'n'" :fontsize="latex_fontsize"/>.
          Все члены ренты, кроме последнего, приносят проценты - на первый член проценты начисляются
          <vue-latex :expression="'(n - 1)'" :fontsize="latex_fontsize"/>
          год, на второй
          <vue-latex :expression="'(n - 2)'" :fontsize="latex_fontsize"/>
          и т.д. На последний взнос проценты не начисляются (напомним, что рента постнумерандо).
          Наращенная к концу срока сумма (записанная в обратном порядке) составит:
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'S = R + R (1 + i) + R (1 + i)^2 + \\dots + R (1 + i)^{n - 1}'"
            display-mode :fontsize="latex_fontsize"/>
        </p>
        <p>
          Нетрудно убедиться в том, что этот ряд представляет собой геометрическую прогрессию со знаменателем
          <vue-latex :expression="'(1 + i)'" :fontsize="latex_fontsize"/>
          и первым членом
          <vue-latex :expression="'R'" :fontsize="latex_fontsize"/>.
          Число членов прогрессии равно
          <vue-latex :expression="'n'" :fontsize="latex_fontsize"/>.
          Искомая величина очевидно равна сумме членов этой прогрессии.
        </p>
        <br>
        <p>
          Откуда
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'S = R \\frac{(1 + i)^n - 1}{i}'"
            display-mode :fontsize="latex_fontsize"/>
        </p>
        <p>
          Обозначим множитель, на который умножается
          <vue-latex :expression="'R'" :fontsize="latex_fontsize"/>,
          через
          <vue-latex :expression="'s_{n;i}'" :fontsize="latex_fontsize"/>
          , нижний индекс
          <vue-latex :expression="'n;i'" :fontsize="latex_fontsize"/>
          указывает на продолжительность ренты и величину процентной ставки. В дальнейшем этот множитель
          будем называть
          <i>коэффициентом наращения ренты</i>.
          Данный коэффициент представляет собой наращенную сумму ренты, член которой равен
          <vue-latex :expression="'1'" :fontsize="latex_fontsize"/>.
        </p>
        <br>
        <p>
          Таким образом,
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'S = R s_{n;i}'"
            display-mode :fontsize="latex_fontsize"/>
        </p>

        <hr>
        <h3 class="text-center">
          Годовая рента,
          <br>
          начисление процентов
          <vue-latex :expression="'m'" :fontsize="latex_fontsize"/>
          раз в году
        </h3>
        <p>
          Пусть, как и выше, анализируется годовая рента постнумерандо. Однако проценты теперь начисляются
          <vue-latex :expression="'m'" :fontsize="latex_fontsize"/>
          раз в году. Число членов ренты равно
          <vue-latex :expression="'n m'" :fontsize="latex_fontsize"/>.
          Члены ренты с начисленными к концу срока процентами образуют ряд (запишем его в обратном порядке):
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'R + R (1 + \\frac{j}{m})^m + R (1 + \\frac{j}{m})^{2m} + \\dots + R (1 + \\frac{j}{m})^{(n - 1) m}'"
            display-mode :fontsize="latex_fontsize"/>
        </p>
        <p>
          где
          <vue-latex :expression="'j'" :fontsize="latex_fontsize"/>
          - номинальная ставка процентов.
        </p>
        <br>
        <p>
          Нетрудно убедиться, что и в этом случае мы имеем дело с возрастающей геометрической прогрессией.
          Первый член прогрессии равен
          <vue-latex :expression="'R'" :fontsize="latex_fontsize"/>,
          знаменатель -
          <vue-latex :expression="'(1 + \\frac{j}{m})^m'" :fontsize="latex_fontsize"/>.
          Сумма членов этой прогрессии составляет
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'S = R \\frac{(1 + \\frac{j}{m})^{m n} - 1}{(1 + \\frac{j}{m})^m - 1}'"
            display-mode :fontsize="latex_fontsize"/>
        </p>

        <hr>
        <h3 class="text-center">
          Рента <vue-latex :expression="'p'" :fontsize="latex_fontsize"/>-срочная <vue-latex :expression="'(m = 1)'" :fontsize="latex_fontsize"/>
        </h3>
        <p>
          Пусть рента выплачивается
          <vue-latex :expression="'p'" :fontsize="latex_fontsize"/>
          раз в году равными суммами, процент начисляется раз в конце года. Если годовая сумма платежей равна
          <vue-latex :expression="'R'" :fontsize="latex_fontsize"/>,
          то каждый раз выплачивается
          <vue-latex :expression="'\\frac{R}{p}'" :fontsize="latex_fontsize"/>.
          Общее число членов ренты равно
          <vue-latex :expression="'n p'" :fontsize="latex_fontsize"/>.
          Последовательность членов ренты с начисленными процентами представляет собой геометрическую прогрессию.
          Первый член ее равен
          <vue-latex :expression="'\\frac{R}{p}'" :fontsize="latex_fontsize"/>,
          знаменатель
          <vue-latex :expression="'(1 + i)^{\\frac{1}{p}}'" :fontsize="latex_fontsize"/>.
          Сумма членов этой прогрессии
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'S = \\frac{R}{p} \\frac{(1 + i)^{\\frac{1}{p} n p} - 1}{(1 + i)^{\\frac{1}{p}} - 1} = R \\frac{(1 + i)^n - 1}{p [(1 + i)^{\\frac{1}{p}} - 1]}'"
            display-mode :fontsize="latex_fontsize"/>
        </p>

        <hr>
        <h3 class="text-center">
          Рента <vue-latex :expression="'p'" :fontsize="latex_fontsize"/>-срочная <vue-latex :expression="'(p = m)'" :fontsize="latex_fontsize"/>
        </h3>
        <p>
          На практике наиболее часто встречаются случаи, когда число выплат в году равно числу начислений процентов:
          <vue-latex :expression="'p = m'" :fontsize="latex_fontsize"/>.
          Для получения необходимой формулы воспользуемся формулой годовой ренты, в которой
          <vue-latex :expression="'i'" :fontsize="latex_fontsize"/>
          заменено на
          <vue-latex :expression="'\\frac{j}{m}'" :fontsize="latex_fontsize"/>,
          а вместо числа лет берется число периодов выплат ренты
          <vue-latex :expression="'n p'" :fontsize="latex_fontsize"/>,
          член ренты ранен
          <vue-latex :expression="'\\frac{R}{p}'" :fontsize="latex_fontsize"/>.
          Поскольку
          <vue-latex :expression="'p = m'" :fontsize="latex_fontsize"/>,
          то в итоге получим
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'S = \\frac{R}{m} \\frac{(1 + \\frac{j}{m})^{m n} - 1}{\\frac{j}{m}} = R \\frac{(1 + \\frac{j}{m})^{n m} - 1}{j}'"
            display-mode :fontsize="latex_fontsize"/>
        </p>

        <hr>
        <h3 class="text-center">
          Рента <vue-latex :expression="'p'" :fontsize="latex_fontsize"/>-срочная <vue-latex :expression="'(p \\neq m)'" :fontsize="latex_fontsize"/>
        </h3>
        <p>
          Определим теперь наращенную сумму для наиболее общего случая -
          <vue-latex :expression="'p'" :fontsize="latex_fontsize"/>-срочная
          рента с начислением процентов
          <vue-latex :expression="'m'" :fontsize="latex_fontsize"/>
          раз в году. Общее количество членов ренты равно
          <vue-latex :expression="'n p'" :fontsize="latex_fontsize"/>,
          величина члена ренты
          <vue-latex :expression="'\\frac{R}{p}'" :fontsize="latex_fontsize"/>.
          Члены ренты с начисленными процентами образуют ряд, соответствующий геометрической прогрессии с первым членом
          <vue-latex :expression="'\\frac{R}{p}'" :fontsize="latex_fontsize"/>
          и знаменателем
          <vue-latex :expression="'(1 + \\frac{j}{m})'" :fontsize="latex_fontsize"/>.
          Сумма членов такой прогрессии составит
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'S = R \\frac{(1 + \\frac{j}{m})^{m n} - 1}{p [(1 + \\frac{j}{m})^{\\frac{m}{p}} - 1]}'"
            display-mode :fontsize="latex_fontsize"/>
        </p>

        <hr>
        <h2>
          Современная стоимость постоянной ренты постнумерандо
        </h2>

        <h3 class="text-center">
          Годовая рента
        </h3>
        <p>
          Вместо термина "современная стоимость" (современная величина) потока платежей в зависимости от контекста
          употребляют также термины
          <i>капитализированная стоимость</i>
          или
          <i>приведенная величина</i>.
          Как было показано выше, современная стоимость потоки платежей эквивалентна в финансовом смысле всем платежам,
          которые охватывает поток. Методы расчета современных стоимостей финансовых рент обсудим в том же порядке,
          что и методы наращения рент и почти столь же детально.
          Начнем с самого простого случая - годовой ренты постнумерандо, член которой равен
          <vue-latex :expression="'R'" :fontsize="latex_fontsize"/>,
          срок ренты
          <vue-latex :expression="'n'" :fontsize="latex_fontsize"/>,
          ежегодное дисконтирование. Рента немедленная. В этих условиях дисконтированная величина первого платежа равна
          <vue-latex :expression="'R v'" :fontsize="latex_fontsize"/>,
          второго -
          <vue-latex :expression="'R v^2'" :fontsize="latex_fontsize"/>,
          последнего -
          <vue-latex :expression="'R v^n'" :fontsize="latex_fontsize"/>.
          Как видим, эти величины образуют ряд, соответствующий геометрической прогрессии с первым членом
          <vue-latex :expression="'R v'" :fontsize="latex_fontsize"/>
          и знаменателем
          <vue-latex :expression="'v'" :fontsize="latex_fontsize"/>.
          Обозначим сумму членов этой прогрессии через
          <vue-latex :expression="'A'" :fontsize="latex_fontsize"/>:
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'A = R \\sum_{t = 1}^{n}{v^t} = R \\frac{1 - (1 + i)^{-n}}{i} = R a_{n;i}'"
            display-mode :fontsize="latex_fontsize"/>
        </p>
        <p>
          Назовем множитель, на который умножается
          <vue-latex :expression="'R'" :fontsize="latex_fontsize"/>,
          <i>коэффициентом приведения ренты</i>,
          он обозначен как
          <vue-latex :expression="'a_{n;i}'" :fontsize="latex_fontsize"/> .
          Этот коэффициент характеризует современную стоимость ренты с членом, равным
          <vue-latex :expression="'1'" :fontsize="latex_fontsize"/>.
        </p>

        <hr>
        <h3 class="text-center">
          Годовая рента,
          <br>
          начисление процентов
          <vue-latex :expression="'m'" :fontsize="latex_fontsize"/>
          раз в году
        </h3>
        <p>
          Не будем выводить формулу для этого случая, а просто заменим в формуле выше дисконтный множитель
          <vue-latex :expression="'(1 + i)^{-n}'" :fontsize="latex_fontsize"/>
          на эквивалентную величину
          <vue-latex :expression="'(1 + \\frac{j}{m})^{-m n}'" :fontsize="latex_fontsize"/>,
          соответственно,
          <vue-latex :expression="'i'" :fontsize="latex_fontsize"/>
          заменим на
          <vue-latex :expression="'((1 + \\frac{j}{m})^{m} - 1)'" :fontsize="latex_fontsize"/>,
          после чего имеем:
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'A = R \\frac{1 - (1 + \\frac{j}{m})^{-m n}}{(1 + \\frac{j}{m})^{m} - 1}'"
            display-mode :fontsize="latex_fontsize"/>
        </p>

        <hr>
        <h3 class="text-center">
          Рента <vue-latex :expression="'p'" :fontsize="latex_fontsize"/>-срочная <vue-latex :expression="'(m = 1)'" :fontsize="latex_fontsize"/>
        </h3>
        <p>
          Если платежи производятся не один, а
          <vue-latex :expression="'p'" :fontsize="latex_fontsize"/>
          раз в году, то коэффициенты приведения находятся так же, как это было сделано для годовой ренты.
          Только теперь размер платежа равен
          <vue-latex :expression="'\\frac{R}{p}'" :fontsize="latex_fontsize"/>,
          а число членов составит
          <vue-latex :expression="'n p'" :fontsize="latex_fontsize"/>.
          Сумма дисконтированных платежей в этом случае равна
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'A = R \\frac{1 - (1 + i)^{-n}}{p [(1 + i)^{\\frac{1}{p}} - 1]}'"
            display-mode :fontsize="latex_fontsize"/>
        </p>

        <hr>
        <h3 class="text-center">
          Рента <vue-latex :expression="'p'" :fontsize="latex_fontsize"/>-срочная <vue-latex :expression="'(p = m)'" :fontsize="latex_fontsize"/>
        </h3>
        <p>
          Число членов ренты здесь равно числу начислений процентов; величина члена ренты составляет
          <vue-latex :expression="'\\frac{R}{m}'" :fontsize="latex_fontsize"/>.
          В итоге
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'A = R \\frac{1 - (1 + \\frac{j}{m})^{-m n}}{j}'"
            display-mode :fontsize="latex_fontsize"/>
        </p>
        <p>
          Этот же результат можно получить если воспользоваться таблицей коэффициентов приведения постоянных рент.
          В этом случае вместо числа лет берется количество периодов ренты, процентная ставка и величина члена ренты
          определяются соответствующим образом.
        </p>

        <hr>
        <h3 class="text-center">
          Рента <vue-latex :expression="'p'" :fontsize="latex_fontsize"/>-срочная <vue-latex :expression="'(p \\neq m)'" :fontsize="latex_fontsize"/>
        </h3>
        <p>
          Сумма членов соответствующей прогрессии составит
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'A = R \\frac{1 - (1 + \\frac{j}{m})^{-m n}}{p [(1 + \\frac{j}{m})^{\\frac{m}{p}} - 1]}'"
            display-mode :fontsize="latex_fontsize"/>
        </p>

        <hr>
        <h2>
          Ренты пренумерандо и ренты с выплатами в середине периодов
        </h2>
        <p>
          Напомним, что под рентой пренумерандо понимается рента с платежами в начале периодов.
          Легко понять, что каждый член такой ренты "работает" на один период больше, чем в ренте постнумерандо.
          Отсюда наращенная сумма ренты пренумерандо, обозначим ее здесь как
          <vue-latex :expression="latex_umlaut + 'S'" :fontsize="latex_fontsize" strict="ignore"/>,
          больше в
          <vue-latex :expression="'(1 + i)'" :fontsize="latex_fontsize"/>,
          раз аналогичной ренты постнумерандо:
        </p>
        <p class="text-center">
          <vue-latex
            :expression="latex_umlaut + 'S = S (1 + i)'"
            display-mode :fontsize="latex_fontsize"
            strict="ignore"/>
        </p>
        <p>
          Аналогичным путем получим для годовой ренты с начислением процентов
          <vue-latex :expression="'m'" :fontsize="latex_fontsize"/>
          раз в году
        </p>
        <p class="text-center">
          <vue-latex
            :expression="latex_umlaut + 'S = S (1 + \\frac{j}{m})^m'"
            display-mode :fontsize="latex_fontsize"
            strict="ignore"/>
        </p>
        <p>
          Для
          <vue-latex :expression="'p'" :fontsize="latex_fontsize"/>-срочных
          рент, у которых
          <vue-latex :expression="'m = 1'" :fontsize="latex_fontsize"/>
          и
          <vue-latex :expression="'m \\neq p'" :fontsize="latex_fontsize"/>,
          получим
        </p>
        <p class="text-center">
          <vue-latex
            :expression="latex_umlaut + 'S = S (1 + i)^{\\frac{1}{p}}'"
            display-mode :fontsize="latex_fontsize"
            strict="ignore"/>
          <vue-latex
            :expression="latex_umlaut + 'S = S (1 + \\frac{j}{m})^{\\frac{m}{p}}'"
            display-mode :fontsize="latex_fontsize"
            strict="ignore"/>
        </p>
        <p>
          Точно такая же зависимость наблюдается и между современными стоимостями и коэффициентами приведения рент
          постнумерандо и пренумерандо:
        </p>
        <p class="text-center">
          <vue-latex
            :expression="latex_umlaut + 'A = A (1 + i) \\qquad и~т.д.'"
            display-mode :fontsize="latex_fontsize"
            strict="ignore"/>
        </p>
        <p>
          Важной для практики является рента с платежами в середине периодов.
          Например, в случаях, когда поступления от производственных инвестиций распределяются более или менее равномерно,
          применение рент пренумерандо или постнумерандо для описания таких потоков может привести к некоторым смещениям
          в значении получаемых показателей.
          В таких ситуациях для уменьшения погрешности рекомендуется суммы поступлений за период относить к середине периодов.
          Наращенные суммы и современные стоимости таких рент находим умножением
          соответствующих обобщающих характеристик рент постнумерандо на множитель наращения за половину периода.
          Так, для современных стоимостей находим следующие соотношения:
        </p>
        <p class="text-center">
          <vue-latex :expression="'A_{\\frac{1}{2}} = A (1 + i)^{\\frac{1}{2}}'" :fontsize="latex_fontsize"/>
          при
          <vue-latex :expression="'p = 1'" :fontsize="latex_fontsize"/>,
          <vue-latex :expression="'m = 1'" :fontsize="latex_fontsize"/>,
        </p>
        <p class="text-center">
          <vue-latex :expression="'A_{\\frac{1}{2}} = A (1 + i)^{\\frac{1}{2 p}}'" :fontsize="latex_fontsize"/>
          при
          <vue-latex :expression="'p > 1'" :fontsize="latex_fontsize"/>,
          <vue-latex :expression="'m = 1'" :fontsize="latex_fontsize"/>,
        </p>
        <p class="text-center">
          <vue-latex :expression="'A_{\\frac{1}{2}} = A (1 + \\frac{j}{m})^{\\frac{m}{2}}'" :fontsize="latex_fontsize"/>
          при
          <vue-latex :expression="'p = 1'" :fontsize="latex_fontsize"/>,
          <vue-latex :expression="'m > 1'" :fontsize="latex_fontsize"/>,
        </p>
        <p class="text-center">
          <vue-latex :expression="'A_{\\frac{1}{2}} = A (1 + \\frac{j}{m})^{\\frac{m}{2 p}}'" :fontsize="latex_fontsize"/>
          при
          <vue-latex :expression="'p > 1'" :fontsize="latex_fontsize"/>,
          <vue-latex :expression="'m > 1'" :fontsize="latex_fontsize"/>.
        </p>
        <div ref="calc">
          <PageRentsCategoryForm/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageRentsCategoryForm from "@/components/pages/categories/rents/PageRentsCategoryForm.vue";
import ScrollToCalculator from "@/components/UI/ScrollToCalculator.vue";
import {app} from "@/_config";

export default {
  name: "PageRentsCategory",
  components: {
    PageRentsCategoryForm,
    ScrollToCalculator
  },
  data() {
    return {
      latex_fontsize: app.latex_fontsize,
      latex_umlaut: '\\"',
      latex_quotes: '"',
    };
  },
}
</script>

<style scoped lang="scss">

</style>
