async function handleSearch() {
    const inputVal = document.getElementById('targetSum').value;
    const container = document.getElementById('results-container');
    const target = parseInt(inputVal);

    if (isNaN(target)) {
        alert("يرجى إدخال رقم صحيح");
        return;
    }

    container.innerHTML = "جاري البحث في الملف الخارجي...";

    try {
        const response = await fetch('acf.json');
        const products = await response.json();

        // استدعاء خوارزمية البحث عن المجموع (Subset Sum)
        const matchedItems = findSubsetSum(products, target);

        renderTable(matchedItems);

    } catch (error) {
        container.innerHTML = "<p class='no-result'>خطأ في تحميل البيانات من الملف.</p>";
    }
}

// خوارزمية إيجاد العناصر التي تحقق المجموع
function findSubsetSum(data, target) {
    let solution = null;

    function backtrack(start, currentSum, temp) {
        if (solution) return;
        if (currentSum === target) {
            solution = [...temp];
            return;
        }
        if (currentSum > target || start === data.length) return;

        for (let i = start; i < data.length; i++) {
            temp.push(data[i]);
            backtrack(i + 1, currentSum + data[i].id, temp);
            temp.pop();
        }
    }

    backtrack(0, 0, []);
    return solution;
}

// دالة بناء الجدول وعرض الاسم والسعر فقط
function renderTable(items) {
    const container = document.getElementById('results-container');
    
    if (!items || items.length === 0) {
        container.innerHTML = "<p class='no-result'>لم يتم العثور على أي منتجات تحقق هذا المجموع.</p>";
        return;
    }

    let totalPrice = 0;
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>الميزة</th>
                    <th>السعر</th>
                </tr>
            </thead>
            <tbody>
    `;

    // المرور على العناصر وحساب المجموع
    items.forEach(item => {
        // تحويل السعر من نص "$100" إلى رقم 100 لجمعه
        const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        totalPrice += isNaN(numericPrice) ? 0 : numericPrice;
        tableHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
            </tr>
        `;
    });

    // إضافة صف الإجمالي في نهاية الجدول
    const sarAmount = totalPrice ? (totalPrice * 3.8).toFixed(2) : 'غير متوفر';

    tableHTML += `
            <tr style="background-color: #f0f0f0; font-weight: bold;">
                <td>الإجمالي</td>
                <td>${totalPrice}$</td>
            </tr>
            <tr style="background-color: #f0f0f0; font-weight: bold;">
                <td>ر.س</td>
                <td>${sarAmount}</td>
            </tr>
        </tbody>
    </table>
    `;

    container.innerHTML = tableHTML;
}