/*
1) Подробно прочитать про метод запроса OPTIONS - и кратко его описать, когда вызывается, где используется, что передает и принимает.

    метод OPTIONS отправляется для:

        -- Определение разрешённых сервером методов запроса:
            Пример запроса: curl -X OPTIONS http://example.org -i
            Ответ на запрос содержит Allow заголовок с поддерживаемыми методами: Allow: OPTIONS, GET, HEAD, POST

        -- Предзапросов по технологии CORS с методами отличными от GET, POST или HEAD с целью разрешения основного запроса.
            Браузер сам отправляет запрос с методом OPTIONS c содержанием:
            - Путь – точно такой же, как в основном запросе: /service.json.
            - Особые заголовки:
                        Origin – источник.
                        Access-Control-Request-Method – запрашиваемый метод.
                        Access-Control-Request-Headers – разделённый запятыми список «непростых» заголовков запроса.
            Сервер должен ответить со статусом 200 и заголовками:
                - Access-Control-Allow-Methods -- возможные методы
                - Access-Control-Allow-Headers -- возможные заголовки
                - Access-Control-Max-Age -- предзапрос кешируется на время, указанное в заголовке
            После этого отправляется основной запрос и получается основной ответ.

2) Прочитать и описать ключевые особенности "HTTP" Версии 3.0

    Цель HTTP/3: обеспечение быстрых, надежных и безопасных веб-соединений на всех типах устройств.
    Использует другой сетевой протокол транспортного уровня, называемый QUIC, который работает поверх интернет-протокола User Datagram Protocol (UDP) вместо TCP.
    В отличие от упорядоченной схемы обмена сообщениями TCP, UDP допускает многонаправленное транслирование рассылки сообщений, что, среди прочего, помогает решать проблемы блокировки заголовка строки (HoL) на уровне пакетов.
    При использовании UDP блокировка заголовка строки на уровне пакета отсутствует.
    Протокол QUIC связан со следующими вариантами проектирования:
        1. UDP как выбор основного протокола транспортного уровня
        2. Мультиплексирование потоков и управление потоком
        3. Гибкое управление перегрузками
        4. Улучшенная обработка ошибок
        5. Установление соединения происходит быстрее
        6. Синтаксис и семантика
        7. Сжатие заголовков под названием QPACK
        8. Улучшенный push

    https://proglib.io/p/budushchee-interneta-kak-rabotayut-protokoly-http-3-quic-i-zachem-oni-nuzhny-2022-07-26
    https://ably.com/topic/http-2-vs-http-3

3) Прочитать про способы отмены запроса, включая объект "AbortController"

    AbortController -- интерфейс, который можно использовать для отмены не только fetch, но и других асинхронных задач.

    let controller = new AbortController();
    Контроллер controller имеет единственный метод abort() и единственное свойство signal.
    При вызове abort():
        генерируется событие с именем abort на объекте controller.signal
        свойство controller.signal.aborted становится равным true.

        Пример без fetch:
    let signal = controller.signal;
    signal.addEventListener('abort', () => alert("отмена!"));
    controller.abort(); // отмена!
    alert(signal.aborted); // true

        Пример с fetch:
    let controller = new AbortController();
    fetch(url, {
        signal: controller.signal
    });

    fetch получает событие из signal и прерывает запрос.
    Когда fetch отменяется, его промис завершается с ошибкой AbortError, поэтому мы должны обработать её.
    AbortController – масштабируемый, он позволяет отменить несколько вызовов fetch одновременно.

3) Написать по 2 примера создания примитивных значений (если есть несколько способов - использовать) (string, number, boolean, null, undefined, symbol, bigInt)

    string:
    const nullString = String(null)
    const backTics = `1 + 5 = ${1+5}`

    number:
    const n = 42
    const numInfinity = Infinity

    boolean:
    const isExist = true
    const helloBoolean = !!"Hello"

    null:
    let nullValue = null
    const element = document.getElementById('notExistingId')

    undefined:
    let x = undefined
    let withoutInitilization;

    symbol:
    const symbolEmpty = Symbol()
    const symbolNumber = Symbol(123)

    bigInt:
    const bigZero = BigInt(0)
    const hugeBigInt = 999999999999n

4) Почему, если обратиться к переменным созданным через let, const до их объявления - мы получаем ReferenceError?

    У let/const блочная область видимости {}.
    ReferenceError означает, что перемменная для данной области видимости не определена или не инициализирована.
    они попадают во временную мёртвую зону (TDZ, Temporal Dead Zone)
    В JS существует такое явление, как поднятие переменных в верхнюю часть их области видимости. То есть, если в некоей области видимости объявляют переменную, JS резервирует место для неё ещё до того, как будет выполнена команда её объявления -- переменные попадают во временную мёртвую зону (TDZ, Temporal Dead Zone).

5) Решить:
*/

const res = "B" + "a" + (1 - "hello");
console.log("B" + "a") // Ba -- конкатенация строк
console.log(1 - "hello") // - "hello" приводит к числу : (1 - NaN) = NaN
console.log('Ba' + NaN) // + NaN приводит к строке : 'Ba' + 'NaN' = 'BaNaN'
console.log(res);

const res2 = (true && 3) + "d";
console.log(true && 3) // Первый аргумент - true, поэтому возвращается второй аргумент : 3
console.log(3 + 'd') // 3 приводится к строке т.к. оператор + : '3d'
console.log(res2); //

const res3 = Boolean(true && 3) + "d";
console.log(Boolean(true && 3)) // Boolean(3) т.к. Первый аргумент - true, поэтому возвращается второй
                                // Boolean(3) === true, т.к. числа кроме 0 и NaN всегда true
console.log(true + 'd') // true приводится к строке 'true' : срабатывает конкатенация строк 'trued'
console.log(res3); //