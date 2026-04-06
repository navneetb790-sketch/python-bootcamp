class PythonBootcamp {
    constructor() {
        this.currentLesson = 0;
        this.lessons = [
            {
                title: "🎉 Lesson 1: Hello World!",
                content: "Every programmer starts with <code>print('Hello, World!')</code>. This displays text on screen!",
                code: `print("Hello, World! 👋")
name = "Student"
print(f"Welcome {name} to Python!")`,
                output: `Hello, World! 👋
Welcome Student to Python!`
            },
            {
                title: "🔢 Lesson 2: Variables & Math",
                content: "Variables store data. Python does math automatically!<br><code>name = 'Alice'<br>age = 25 + 5<br>print(f'Hi {name}, age: {age}')</code>",
                code: `name = "Alice"
age = 25 + 5
print(f"Hi {name}, age: {age}")`,
                output: `Hi Alice, age: 30`
            },
            {
                title: "✅ Lesson 3: Decisions (if/else)",
                content: "Make smart programs with if/else!<br><code>age = 20<br>if age >= 18:<br>    print('Adult! 🚀')</code>",
                code: `age = 20
if age >= 18:
    print("Adult! 🚀")
else:
    print("Young! 💪")`,
                output: `Adult! 🚀`
            }
        ];
        
        this.init();
    }
    
    init() {
        this.startBtn = document.getElementById('start-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.tryBtn = document.getElementById('try-btn');
        
        this.startBtn.addEventListener('click', () => this.startLesson());
        this.nextBtn.addEventListener('click', () => this.nextLesson());
        this.tryBtn.addEventListener('click', () => this.showCode());
        
        this.updateProgress();
    }
    
    startLesson() {
        this.currentLesson = 0;
        this.showLesson();
        this.startBtn.style.display = 'none';
        this.nextBtn.style.display = 'block';
    }
    
    showLesson() {
        const lesson = this.lessons[this.currentLesson];
        document.getElementById('lesson-title').textContent = lesson.title;
        document.getElementById('lesson-content').innerHTML = lesson.content;
        this.updateProgress();
    }
    
    showCode() {
        const lesson = this.lessons[this.currentLesson];
        document.getElementById('code-editor').style.display = 'block';
        document.getElementById('code-display').textContent = lesson.code;
        document.getElementById('live-output').innerHTML = `<pre>${lesson.output}</pre>`;
    }
    
    nextLesson() {
        this.currentLesson++;
        if (this.currentLesson < this.lessons.length) {
            this.showLesson();
        } else {
            this.completeCourse();
        }
    }
    
    updateProgress() {
        const progress = (this.currentLesson / this.lessons.length) * 100;
        document.getElementById('progress').style.width = progress + '%';
    }
    
    completeCourse() {
        document.getElementById('lesson-title').innerHTML = '🎉 <strong>COURSE COMPLETE!</strong> 🎓';
        document.getElementById('lesson-content').innerHTML = `
            <h2 style="color: #4facfe;">You are now a Python developer! 🚀</h2>
            <p>✅ Mastered: Variables, Math, Conditions</p>
            <p>Next: Build your first project!</p>
        `;
        this.nextBtn.textContent = '🎊 Restart Course';
    }
}

new PythonBootcamp();