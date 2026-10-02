/* Core data for the mini-app — compact and 2026-relevant */
window.toolkit = {
  dataTypes: [
    {
      id: "tabular",
      name: "Табличные данные",
      short: "CSV, Parquet, Arrow, Delta",
      description:
        "Основной формат для аналитики и feature engineering. Колонный Parquet/Arrow/Delta — стандарт для крупных наборов данных.",
      useCases: ["ETL", "аналитика", "feature engineering"],
      ecosystem: ["pandas", "Polars", "DuckDB", "Spark", "PyArrow"],
      tip: "Для больших данных — Parquet/Delta/Arrow."
    },
    {
      id: "timeseries",
      name: "Временные ряды",
      short: "sensor data, metrics, forecasting",
      description: "Данные, привязанные ко времени: метрики, логи, сенсорика и финансовые ряды.",
      useCases: ["forecasting", "monitoring", "anomaly detection"],
      ecosystem: ["pandas", "statsmodels", "Prophet", "InfluxDB"],
      tip: "Важно — корректный временной индекс и resampling."
    },
    {
      id: "text",
      name: "Текст / NLP",
      short: "documents, chats, logs",
      description: "Текстовые данные: документы, чаты, логи. Часто используются embeddings и RAG-пайплайны.",
      useCases: ["NLP", "semantic search", "classification"],
      ecosystem: ["Hugging Face", "spaCy", "OpenSearch", "transformers"],
      tip: "Предобработка и токенизация — ключ к качеству."
    },
    {
      id: "images",
      name: "Изображения",
      short: "CV, medical, satellite",
      description: "Обучение и инференс на изображениях: classification, detection, segmentation.",
      useCases: ["classification", "segmentation", "detection"],
      ecosystem: ["PyTorch", "TensorFlow", "OpenCV"],
      tip: "Учтите размеры, аугментации и хранение (tiles/patches)."
    },
    {
      id: "geodata",
      name: "Геоданные",
      short: "GeoJSON, shapefiles",
      description: "Координатные и геопространственные данные для аналитики по регионам и маршрутам.",
      useCases: ["maps", "logistics", "spatial analytics"],
      ecosystem: ["GeoPandas", "PostGIS", "Shapely"],
      tip: "Следите за CRS и пространственными индексами."
    },
    {
      id: "graph",
      name: "Графовые данные",
      short: "social graph, recommendations",
      description: "Данные в виде узлов и связей: рекомендательные системы, графовый анализ.",
      useCases: ["recommendation", "fraud detection", "network analysis"],
      ecosystem: ["Neo4j", "NetworkX", "PyG"],
      tip: "Графы полезны, когда важны отношения между сущностями."
    },
    {
      id: "streaming",
      name: "Streaming / event data",
      short: "Kafka, events, telemetry",
      description: "Событийные потоки для real-time аналитики, мониторинга и реактивных систем.",
      useCases: ["real-time dashboards", "stream processing"],
      ecosystem: ["Kafka", "Flink", "Spark Streaming"],
      tip: "Используйте схемы и валидацию (Avro/JSON Schema)."
    },
    {
      id: "vectors",
      name: "Embeddings / Vector data",
      short: "semantic search, RAG",
      description: "Векторные представления для поиска по смыслу и рекомендаций.",
      useCases: ["semantic search", "similarity", "RAG"],
      ecosystem: ["FAISS", "pgvector", "Qdrant", "Weaviate"],
      tip: "Хранение и индексирование векторов — ключевой компонент современных приложений."
    },
    {
      id: "multimodal",
      name: "Multi-modal data",
      short: "text + image + audio + metadata",
      description: "Данные, объединяющие несколько типов сигналов — важны для современных AI-систем.",
      useCases: ["multimodal ML", "vision-language"],
      ecosystem: ["transformers", "CLIP"],
      tip: "Синхронизация и привязка данных разных типов — главная сложность."
    }
  ],
  apis: [
    {
      id: "rest",
      name: "REST",
      short: "HTTP + JSON",
      description: "Широко распространённый архитектурный стиль для сервисов и ML-инференса.",
      useCases: ["model serving", "internal APIs"],
      ecosystem: ["OpenAPI", "Swagger"],
      tip: "Простой и понятный для большинства клиентов."
    },
    {
      id: "openapi",
      name: "OpenAPI",
      short: "API contract/spec",
      description: "Стандартизованный формат описания API; упрощает документацию и генерацию клиентов.",
      useCases: ["documentation", "SDK generation"],
      ecosystem: ["Swagger UI", "FastAPI"],
      tip: "Рекомендуется как контракт для всех production API."
    },
    {
      id: "fastapi",
      name: "FastAPI",
      short: "Python framework",
      description: "Лёгкий и быстрый фреймворк с авто-генерацией OpenAPI; отличен для ML-сервисов.",
      useCases: ["model serving", "microservices"],
      ecosystem: ["Pydantic", "Uvicorn"],
      tip: "Широко используется в 2026 для Python-стека."
    },
    {
      id: "graphql",
      name: "GraphQL",
      short: "Flexible queries",
      description: "Позволяет клиенту запрашивать только нужные поля через один endpoint.",
      useCases: ["frontend aggregation", "complex data views"],
      ecosystem: ["Apollo"],
      tip: "Хорош для гибкого фронтенд-потребления, но сложнее в кэшировании."
    },
    {
      id: "grpc",
      name: "gRPC",
      short: "RPC + protobuf",
      description: "Высокопроизводительный бинарный протокол для межсервисного взаимодействия.",
      useCases: ["internal microservices", "high-throughput"],
      ecosystem: ["protobuf", "Envoy"],
      tip: "Отлично для внутренней инфраструктуры, меньше удобен для внешних клиентов."
    },
    {
      id: "websocket",
      name: "WebSockets",
      short: "Real-time bi-directional",
      description: "Подходит для realtime dashboards, чатов и потоковых обновлений.",
      useCases: ["live UI", "monitoring"],
      ecosystem: ["Socket.io"],
      tip: "Используйте для интерактивного UIs."
    }
  ],
  devops: [
    {
      id: "gha",
      name: "GitHub Actions",
      short: "CI/CD",
      description: "Автоматизация тестов, сборки и деплоя прямо в репозитории.",
      useCases: ["CI", "CD", "checks"],
      ecosystem: ["actions", "runners"],
      tip: "Быстрый путь к автоматизации для DS-команд."
    },
    {
      id: "docker",
      name: "Docker",
      short: "Containers",
      description: "Упаковка окружения и зависимостей для воспроизводимости и деплоя.",
      useCases: ["reproducible env", "deployment"],
      ecosystem: ["Dockerfile", "registry"],
      tip: "По-прежнему стандарт для упаковки сервисов."
    },
    {
      id: "k8s",
      name: "Kubernetes",
      short: "Orchestration",
      description: "Оркестрация контейнеров для продакшн-скейлинга и управления.",
      useCases: ["prod services", "scaling"],
      ecosystem: ["Helm", "Ingress"],
      tip: "Ключевой элемент для production-платформ."
    },
    {
      id: "terraform",
      name: "Terraform",
      short: "IaC",
      description: "Инфраструктура как код для облачных ресурсов и сетей.",
      useCases: ["cloud infra", "repeatable setup"],
      ecosystem: ["providers", "modules"],
      tip: "Рекомендуется для долгосрочного управления infra."
    },
    {
      id: "prom",
      name: "Prometheus + Grafana",
      short: "Monitoring",
      description: "Сбор метрик, алёрты и визуализация состояния систем и моделей.",
      useCases: ["alerts", "SLOs", "dashboards"],
      ecosystem: ["Prometheus", "Grafana"],
      tip: "Фундамент наблюдаемости для production."
    },
    {
      id: "mlflow",
      name: "MLflow",
      short: "Model lifecycle",
      description: "Трекинг экспериментов, реестр моделей и базовый serving.",
      useCases: ["tracking", "registry"],
      ecosystem: ["tracking", "registry"],
      tip: "Стандарт для многих DS-команд."
    },
    {
      id: "dbt",
      name: "dbt",
      short: "Analytics engineering",
      description: "Трансформации данных в SQL, тесты и lineage внутри хранилища.",
      useCases: ["warehouse transforms", "data modeling"],
      ecosystem: ["SQL", "warehouse"],
      tip: "Мощный инструмент для аналитической инженерии."
    },
    {
      id: "orchestration",
      name: "Airflow / Dagster / Prefect",
      short: "Workflows",
      description: "Оркестрация DAG-пайплайнов для ETL и scheduled jobs.",
      useCases: ["pipelines", "batch jobs"],
      ecosystem: ["DAGs", "schedulers"],
      tip: "Выбирайте по потребностям: Airflow — зрелый выбор, Dagster — более современный UX."
    }
  ]
};
