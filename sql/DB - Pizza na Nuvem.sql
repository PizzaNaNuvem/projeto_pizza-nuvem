-- Cria a tabela Cliente
CREATE TABLE Cliente (
    ID_Cliente INT PRIMARY KEY,
    Nome VARCHAR(100),
    Endereço VARCHAR(100),
    Telefone VARCHAR(15)
);

--Cria a tabela Pedido
CREATE TABLE Pedido (
    ID_Pedido INT PRIMARY KEY,
    ID_Cliente INT,
    Data_Pedido DATE,
    Total_Pedido DECIMAL(5,2),
    FOREIGN KEY (ID_Cliente) REFERENCES Cliente(ID_Cliente)
);

--Cria a tabela Pizza
CREATE TABLE Pizza (
    ID_Pizza INT PRIMARY KEY,
    Nome_Pizza VARCHAR(50),
    Descrição VARCHAR(100),
    Preço DECIMAL(5,2)
);

-- Cria a tabela Item_pedido
CREATE TABLE Item_Pedido (
    ID_Item_Pedido INT PRIMARY KEY,
    ID_Pedido INT,
    ID_Pizza INT,
    Quantidade INT,
    Preço_Item DECIMAL(5,2),
    FOREIGN KEY (ID_Pedido) REFERENCES Pedido(ID_Pedido),
    FOREIGN KEY (ID_Pizza) REFERENCES Pizza(ID_Pizza)
);

-- insere valores na tabela Clinte
INSERT INTO Cliente (ID_Cliente, Nome, Endereço, Telefone) VALUES
(1, 'João', 'Rua Pindamonhagaba,255', '25441244'),
(2, 'Maria', 'Rua Ipe roxo,1783', '25663355'),
(3, 'Carlos', 'Rua Casos teste,254', '24578596'),
(4, 'Ana', 'Rua Diadora,587', '24125478'),
(5, 'Pedro', 'Rua Estancia da serra,414', '23548966');

-- Insere valores na tabela Pizza
INSERT INTO Pizza (ID_Pizza, Nome_Pizza, Descricao, Preco) VALUES
(1, 'Margherita', 'Simples', 10.00),
(2, 'Pepperoni', 'Picante', 15.00),
(3, 'Quatro Queijos', 'Queijo', 12.00),
(4, 'Frango com Catupiry', 'Frango', 14.00),
(5, 'Portuguesa', 'Presunto', 13.00);

--Insere valores na tabela pedido
INSERT INTO Pedido (ID_Pedido, ID_Cliente, Data_Pedido, Total_Pedido) VALUES
(1, 1, '2023-01-01', 30.00),
(2, 2, '2023-02-01', 20.00),
(3, 3, '2023-03-01', 25.00),
(4, 4, '2023-04-01', 28.00),
(5, 5, '2023-05-01', 32.00);

-- Insere valores na tabela comanda
INSERT INTO Item_Pedido (ID_comanda, ID_Pedido, ID_Pizza, Quantidade, Preco_Item) VALUES
(1, 1, 1, 2, 20.00),
(2, 2, 2, 1, 15.00),
(3, 3, 3, 2, 24.00),
(4, 4, 4, 2, 28.00),
(5, 5, 5, 2, 26.00);

--Encontrar todos os pedidos de um cliente específico
SELECT * FROM Pedido WHERE ID_Cliente = 1;

--Encontrar o total gasto por um cliente específico
SELECT SUM(Total_Pedido) FROM Pedido WHERE ID_Cliente = 1;

--Encontrar todas as pizzas em um pedido específico
SELECT Pizza.* FROM Pizza
JOIN Item_Pedido ON Pizza.ID_Pizza = Item_Pedido.ID_Pizza
WHERE Item_Pedido.ID_Pedido = 1;

--Encontrar o número de pizzas vendidas de um tipo específico
SELECT SUM(Quantidade) FROM Item_Pedido WHERE ID_Pizza = 1;

--Encontrar o cliente que fez o maior número de pedido
SELECT ID_Cliente, COUNT(*) as Numero_de_Pedidos 
FROM Pedido 
GROUP BY ID_Cliente 
ORDER BY Numero_de_Pedidos DESC 
LIMIT 1;




